from django.urls import path
from .views import post_list

app_name = 'post'

urlpatterns = [
    path('', post_list, name='post_list')
]
