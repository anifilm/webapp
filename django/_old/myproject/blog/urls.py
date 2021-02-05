from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='index'),	# 글 목록
	path('<int:pk>/', views.post_detail, name='post_detail'),		# 글 내용
	path('<int:pk>/comments/new/', views.comment_new, name='comment_new'),	# 새 댓글 생성



	path('new/', views.post_new, name='post_new'),		# 새 포스팅 등록
]