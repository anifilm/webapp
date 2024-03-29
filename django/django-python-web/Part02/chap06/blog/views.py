from django.views.generic import ListView, DetailView, TemplateView
from django.views.generic import ArchiveIndexView, YearArchiveView, MonthArchiveView
from django.views.generic import DayArchiveView, TodayArchiveView

from blog.models import Post


# --- ListView
class PostLV(ListView):
    model = Post
    template_name = "blog/post_all.html"
    context_object_name = "posts"
    paginate_by = 2


# --- DetailView
class PostDV(DetailView):
    model = Post


# --- ArchiveView
class PostAV(ArchiveIndexView):
    model = Post
    date_field = "modify_dt"


class PostYAV(YearArchiveView):
    model = Post
    date_field = "modify_dt"
    make_object_list = True


class PostMAV(MonthArchiveView):
    model = Post
    date_field = "modify_dt"


class PostDAV(DayArchiveView):
    model = Post
    date_field = "modify_dt"


class PostTAV(TodayArchiveView):
    model = Post
    date_field = "modify_dt"


#--- Tag View
class TagCloudTV(TemplateView):
    template_name = "taggit/taggit_cloud.html"


class TaggedObjectLV(ListView):
    template_name = "taggit/taggit_post_list.html"
    modle = Post

    def get_queryset(self):
        return Post.objects.filter(tags__name=self.kwargs.get("tag"))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["tagname"] = self.kwargs["tag"]
        return context
