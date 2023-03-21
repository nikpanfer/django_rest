from rest_framework.serializers import ModelSerializer

from .models import CustomUser


class CustomUserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name', 'age', 'email']


class CustomUserModelSerializerLarge(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name', 'age', 'email', 'is_staff', 'is_superuser']