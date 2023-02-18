from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin, ListModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import CustomUser
from .serializers import CustomUserModelSerializer


# Create your views here.
class CustomUserModelViewSet(RetrieveModelMixin, UpdateModelMixin, ListModelMixin, GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer
