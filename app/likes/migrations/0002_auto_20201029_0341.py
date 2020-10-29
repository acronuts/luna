# Generated by Django 3.1.2 on 2020-10-29 03:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_auto_20201028_1305'),
        ('comments', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('likes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='like',
            name='comment_like',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fk_like_comment', to='comments.comment'),
        ),
        migrations.AlterField(
            model_name='like',
            name='review_like',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fk_like_review', to='reviews.review'),
        ),
        migrations.AlterField(
            model_name='like',
            name='user_like',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='fk_like_user', to='users.user'),
            preserve_default=False,
        ),
    ]
