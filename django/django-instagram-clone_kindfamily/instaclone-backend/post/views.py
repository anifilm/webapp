from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST
from django.http import HttpResponse
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

import json

from .forms import PostForm, CommentForm
from .models import Post, Comment

def post_list(request, tag=None):
    post_list = Post.objects.all()
    comment_form = CommentForm()

    paginator = Paginator(post_list, 3)
    page_num = request.POST.get('page')

    try:
        posts = paginator.page(page_num)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    if request.is_ajax():
        return render(request, 'post/post_list_ajax.html', {
            'posts': posts,
            'comment_form': comment_form,
        })

    if request.user.is_authenticated:
        username = request.user
        user = get_object_or_404(get_user_model(), username=username)
        user_profile = user.profile
        follow_set = request.user.profile.get_following
        follow_post_list = Post.objects.filter(author__profile__in=follow_set)

        return render(request, 'post/post_list.html', {
            'user_profile': user_profile,
            'posts': posts,
            'follow_post_list': follow_post_list,
            'comment_form': comment_form,
        })
    else:
        return render(request, 'post/post_list.html', {
            'posts': posts,
            'comment_form': comment_form,
        })

@login_required
def post_new(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            #post.tag_save()
            messages.info(request, '새 글이 등록되었습니다.')
            return redirect('post:post_list')
    else:
        form = PostForm()

    return render(request, 'post/post_new.html', {'form': form})

@login_required
def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if post.author != request.user:
        messages.warning(request, '잘못된 접근입니다.')
        return redirect('post:post_list')
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            post = form.save()
            #post.tag_set.clear()
            #post.tag_save()
            messages.success(request, '수정 완료')
            return redirect('post:post_list')
    else:
        form = PostForm(instance=post)

    return render(request, 'post/post_edit.html', {
        'post': post,
        'form': form,
    })

@login_required
def post_delete(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if post.author != request.user or request.method != 'POST':  # URL을 통한 DB 접근을 막는다.
        messages.warning(request, '잘못된 접근입니다.')
    else:
        post.delete()
        #mesasges.success(request, '삭제 완료')

    return redirect('post:post_list')

@login_required
@require_POST
def post_like(request):
    pk = request.POST.get('pk', None)
    post = get_object_or_404(Post, pk=pk)
    post_like, post_like_created = post.like_set.get_or_create(user=request.user)

    if not post_like_created:
        post_like.delete()
        message = '좋아요 취소'
    else:
        message = '좋아요'

    context = {
        'like_count': post.like_count,
        'message': message,
    }

    return HttpResponse(json.dumps(context), content_type='application/json')

@login_required
@require_POST
def post_bookmark(request):
    pk = request.POST.get('pk', None)
    post = get_object_or_404(Post, pk=pk)
    post_bookmark, post_bookmark_created = post.bookmark_set.get_or_create(user=request.user)

    if not post_bookmark_created:
        post_bookmark.delete()
        message = '북마크 취소'
    else:
        message = '북마크'

    context = {
        'bookmark_count': post.bookmark_count,
        'message': message,
    }

    return HttpResponse(json.dumps(context), content_type='application/json')

@login_required
def comment_new(request):
    pk = request.POST.get('pk')
    post = get_object_or_404(Post, pk=pk)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.post = post
            comment.save()
            return render(request, 'post/comment_new_ajax.html', {'comment': comment})
    return redirect('post:post_list')

@login_required
def comment_new_detail(request):
    pk = request.POST.get('pk')
    post = get_object_or_404(Post, pk=pk)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.post = post
            comment.save()
            return render(request, 'post/commnet_new_detail_ajax.html', {'comment': comment})

@login_required
def comment_delete(request):
    pk = request.POST.get('pk')
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'POST' and request.user == comment.author:
        comment.delete()
        message = '삭제 완료'
        status = 1
    else:
        message = '잘못된 접근입니다.'
        status = 0

    return HttpResponse(json.dumps({'message': message, 'status': status}), content_type='application/json')
