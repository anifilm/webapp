from django.contrib.auth import authenticate, login
from django.contrib.auth import logout as django_logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import redirect, render, get_object_or_404
from django.views.decorators.http import require_POST
from django.http import HttpResponse

import json

from .forms import SignupForm, LoginForm
from .models import Profile, Follow

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST, request.FILES)
        if form.is_valid():
            #user = form.save()
            form.save()
            return redirect('accounts:login')
    else:
        form = SignupForm()

    return render(request, 'accounts/signup.html', {'form': form})

def login_check(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)

        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('/')
    else:
        form = AuthenticationForm()

    return render(request, 'accounts/login.html', {'form': form})

def logout(request):
    django_logout(request)
    return redirect('/')

@login_required
@require_POST
def follow(request):
    from_user = request.user.profile
    pk = request.POST.get('pk')
    to_user = get_object_or_404(Profile, pk=pk)
    follow, created = Follow.objects.get_or_create(from_user=from_user, to_user=to_user)

    if created:
        message = '팔로우 시작'
        status = 1
    else:
        follow.delete()
        message = '팔로우 취소'
        status = 0

    context = {
        'message': message,
        'status': status,
    }

    return HttpResponse(json.dumps(context), content_type='application/json')
