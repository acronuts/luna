from django.urls import path

from restaurants.views import ListRestaurantsView, CreateRestaurantView

urlpatterns = [
    path('', ListRestaurantsView.as_view()),
    path('new/', CreateRestaurantView.as_view())
]
