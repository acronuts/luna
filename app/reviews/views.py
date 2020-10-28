
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from reviews.models import Review
from reviews.serializers import ReviewSerializer

from reviews.permissions import IsUserOrReadOnly


class CreateReviewView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'restaurant_id'
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, restaurant_id=self.kwargs['restaurant_id'])


class ListReviewsByRest(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'restaurant_id'
    permission_classes = []

    def get_queryset(self):
        return Review.objects.filter(restaurant=self.kwargs['restaurant_id'])


class ListReviewsByUser(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'user_id'
    permission_classes = []

    def get_queryset(self):
        return Review.objects.filter(author=self.kwargs['user_id'])


class GetPatchDeleteReviewView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

