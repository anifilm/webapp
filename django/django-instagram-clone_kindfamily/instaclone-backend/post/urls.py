from django.urls import path

from . import views

app_name = 'post'

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('new/', views.post_new, name='post_new'),
    path('edit/<int:pk>/', views.post_edit, name='post_edit'),
    path('delete/<int:pk>/', views.post_delete, name='post_delete'),
    path('explore/tags/<tag>/', views.post_list, name='post_search'),
    path('<int:pk>/', views.post_detail, name='post_detail'),
    path('like', views.post_like, name='post_like'),
    path('bookmark', views.post_bookmark, name='post_bookmark'),
    path('comment/new/', views.comment_new, name='comment_new'),
    path('comment_detail/new/', views.comment_new_detail, name='comment_new_detail'),
    path('comment/delete/', views.comment_delete, name='comment_delete'),
    path('<username>/list/detail/', views.my_post_list, name='my_post_list'),
]
