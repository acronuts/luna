from django.db import models

from restaurants.models import Restaurant


class Category(models.Model):
    name = models.CharField(max_length=30)
    restaurant = models.ForeignKey(to=Restaurant, related_name='fk_category_restaurant', on_delete=models.CASCADE)

    def __str__(self):
        return f'ID {self.pk}: {self.name}'
