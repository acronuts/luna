# Generated by Django 3.1.2 on 2020-10-27 11:26

from django.db import migrations, models
import django.db.models.deletion
import registrations.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('code', models.CharField(default=registrations.models.code_generator, max_length=5)),
                ('code_used', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='user_reg', serialize=False, to='users.user')),
            ],
        ),
    ]
