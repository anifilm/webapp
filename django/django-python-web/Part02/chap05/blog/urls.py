from django.urls import path, re_path
from blog import views


app_name = "blog"

urlpatterns = [
    # Example: /blog/
    path("", views.PostLV.as_view(), name="index"),
    # Example: /blog/post/ (same as /blog/)
    path("post/", views.PostLV.as_view(), name="post_list"),
    # Example: /blog/post/django-example/
    re_path(r"^post/(?P<slug>[-\w]+)/$", views.PostDV.as_view(), name="post_detail"),
    # Example: /blog/archive/
    path("archive/", views.PostAV.as_view(), name="post_archive"),
    # Example: /blog/archive/2019/
    path("archive/<int:year>/", views.PostYAV.as_view(), name="post_year_archive"),
    # Example: /blog/archive/2019/9/
    path("archive/<int:year>/<int:month>/", views.PostMAV.as_view(month_format='%m'), name="post_month_archive"),
    # Example: /blog/archive/2019/9/10/
    path("archive/<int:year>/<int:month>/<int:day>/", views.PostDAV.as_view(month_format='%m'), name="post_day_archive"),
    # Example: /blog/archive/today/
    path("archive/today/", views.PostTAV.as_view(), name="post_today_archive"),
]
