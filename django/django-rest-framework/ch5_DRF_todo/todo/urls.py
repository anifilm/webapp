from django.urls import path, include
from .views import TodoAPIView
#, TodoAPIView, DoneTodosAPIView, DoneTodoAPIView

urlpatterns = [
    path('todo/', TodoAPIView.as_view()),
    #path('todo/<int:pk>/', TodoAPIView.as_view()),
    #path('done/', DoneTodosAPIView.as_view()),
    #path('done/<int:pk>/', DoneTodoAPIView.as_view()),
]
