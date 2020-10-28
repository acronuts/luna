from django.urls import path

from restaurants.views import ListRestaurantsView, CreateRestaurantView, GetPatchDeleteRestaurantView, ListRestaurantsByCat

urlpatterns = [
    path('', ListRestaurantsView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('<int:id>/', GetPatchDeleteRestaurantView.as_view()),
    path('category/<int:category_id>/', ListRestaurantsByCat.as_view()),
]
