from django.contrib.auth import get_user_model
from django.shortcuts import redirect, render, get_object_or_404

from .models import Post

def post_list(request):
    posts = Post.objects.all()

    if request.user.is_authenticated:
        username = request.user
        user = get_object_or_404(get_user_model(), username=username)
        user_profile = user.profile
        return render(request, 'post/post_list.html', {
            'user_profile': user_profile,
            'posts': posts,
        })
    else:
        return render(request, 'post/post_list.html', {
            'posts': posts,
        })
