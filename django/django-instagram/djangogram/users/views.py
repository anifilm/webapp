from django.contrib.auth import authenticate, login
from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse


def main(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("posts:index"))
        else:
            return render(request, "users/main.html")
    else:
        return render(request, "users/main.html")
