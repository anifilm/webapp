from django.urls import path
from .views import signup, login_check, logout, follow

app_name = 'accounts'

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login_check, name='login'),
    path('logout/', logout, name='logout'),
    path('follow/', follow, name='follow'),
]
