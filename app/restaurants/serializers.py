from rest_framework import serializers

from users.serializers import UserSerializer

from restaurants.models import Restaurant

from images.serializers import ImageSerializer

from time_tables.serializers import TimeTableSerializer

from categories.serializers import CategorySerializer


class RestaurantSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    fk_image_restaurant = ImageSerializer(many=True, required=False)
    fk_timetable_restaurant = TimeTableSerializer(many=True, required=False)
    fk_category_restaurant = CategorySerializer(many=True)

    class Meta:
        model = Restaurant
        fields = ['name', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email', 'price_level', 'owner',
                  'fk_image_restaurant', 'fk_timetable_restaurant', 'fk_category_restaurant']
