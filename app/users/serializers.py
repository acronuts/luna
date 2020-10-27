from django.contrib.auth import get_user_model
from rest_framework import serializers

from interests.models import Interest

User = get_user_model()


class UserInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    fk_interest_user = UserInterestSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'location', 'about', 'phone', 'avatar',
                  'banner', 'fk_interest_user']
