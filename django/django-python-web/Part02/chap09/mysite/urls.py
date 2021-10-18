from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from mysite.views import HomeView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", HomeView.as_view(), name="home"),
    path("bookmark/", include("bookmark.urls")),
    path("blog/", include("blog.urls")),
    path("photo/", include("photo.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
