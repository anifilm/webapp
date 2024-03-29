# Generated by Django 2.2.2 on 2021-10-18 01:52

from django.db import migrations, models
import photo.fields


class Migration(migrations.Migration):

    dependencies = [
        ('photo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=photo.fields.ThumbnailImageField(upload_to='photo/%Y/%m', verbose_name='IMAGE'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='upload_dt',
            field=models.DateTimeField(auto_now_add=True, verbose_name='UPLOAD DATE'),
        ),
    ]
