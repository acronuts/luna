from rest_framework import serializers

from reviews.models import Review
from users.serializers import UserSerializer

from restaurants.serializers import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
