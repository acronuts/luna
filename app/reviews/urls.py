from django.urls import path

from reviews.views import CreateReviewView, ListReviewsByRest, ListReviewsByUser, GetPatchDeleteReviewView

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListReviewsByRest.as_view()),
    path('user/<int:user_id>/', ListReviewsByUser.as_view()),
    path('<int:id>/', GetPatchDeleteReviewView.as_view())
]
