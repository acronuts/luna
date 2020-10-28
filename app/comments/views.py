from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView

from comments.models import Comment

from comments.serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticated

from comments.permissions import IsUserOrReadOnly


class CreateCommentView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'review_id'
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, review_id=self.kwargs['review_id'])


class ListCommentsByUser(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'user_id'
    permission_classes = []

    def get_queryset(self):
        return Comment.objects.filter(author=self.kwargs['user_id'])


class DeleteCommentView(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

