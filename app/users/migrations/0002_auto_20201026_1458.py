# Generated by Django 3.1.2 on 2020-10-26 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='location',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
