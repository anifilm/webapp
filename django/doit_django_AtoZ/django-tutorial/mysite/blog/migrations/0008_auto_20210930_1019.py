# Generated by Django 3.1.1 on 2021-09-30 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20210930_0959'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('slug', models.SlugField(allow_unicode=True, max_length=200, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.category'),
        ),
    ]
