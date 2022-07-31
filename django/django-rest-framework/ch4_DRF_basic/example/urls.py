from django.urls import path, include
from .views import helloAPI, bookAPI, booksAPI, BookAPI, BooksAPI

urlpatterns = [
    path('hello/', helloAPI),
    path('fbv/books/', booksAPI),
    path('fbv/book/<int:bid>', bookAPI),
    path('cbv/books/', BooksAPI.as_view()),
    path('cbv/book/<int:bid>', BookAPI.as_view()),
]
