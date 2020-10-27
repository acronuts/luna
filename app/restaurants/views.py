from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response

from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

from categories.models import Category


class ListRestaurantsView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class CreateRestaurantView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def post(self, request, *args, **kwargs):
        restaurant = Restaurant(owner=self.request.user, name=request.data['name'], country=request.data['country'],
                                street=request.data['street'], city=request.data['city'], phone=request.data['phone'])
        restaurant.save()
        category = Category(name=self.request.data['fk_category_restaurant'], restaurant=restaurant)
        category.save()
        return Response(status=200)
