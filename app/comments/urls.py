from django.urls import path

from comments.views import CreateCommentView, ListCommentsByUser, DeleteCommentView

urlpatterns = [
    path('new/<int:review_id>/', CreateCommentView.as_view()),
    path('<int:user_id>/', ListCommentsByUser.as_view()),
    path('del/<int:comment_id>/', DeleteCommentView.as_view())
]