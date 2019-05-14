from django.shortcuts import render, redirect
from .models import Post
from .forms import CommentForm

def index(request):
	post_list = Post.objects.all()
	return render(request, 'blog/index.html', {
		'post_list': post_list
		})

def post_detail(request, pk):
	post = Post.objects.get(pk=pk)	# Post.DoesNotExist
	return render(request, 'blog/post_detail.html', {	'post': post})

def comment_new(request, pk):
	if request.method == 'POST':
		form = CommentForm(request.POST)
		if form.is_valid():
			comment = form.save(commit=False)
			comment.post = Post.objects.get(pk=pk)
			comment.save()
			return redirect('post_detail', pk)
	else:
		form = CommentForm()
	return render(request, 'blog/post_form.html', {'form': form})

def post_new(request):
	return render(request, 'blog/post_form.html')