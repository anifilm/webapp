from django.db import models
from django.conf import settings
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill


def user_path(instance, filename):
    from random import choice
    import string

    arr = [choice(string.ascii_letters) for _ in range(8)]
    pid = ''.join(arr)
    extension = filename.split('.')[-1]
    return 'accounts/{}/{}.{}'.format(instance.user.username, pid, extension)


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nickname = models.CharField('별명', max_length=30, unique=True)
    pickure = ProcessedImageField(upload_to=user_path, processors=[ResizeToFill(150, 150)], format='JPEG', options={'quality': 90}, blank=True)
    about = models.CharField(max_length=300, blank=True)
    GENDER_C = (
        ('선택안함', '선택안함'),
        ('여성', '여성'),
        ('남성', '남성'),
    )
    gender = models.CharField('성별(선택사항)', max_length=10, choices=GENDER_C, default='N')

    def __str__(self):
        return self.nickname
