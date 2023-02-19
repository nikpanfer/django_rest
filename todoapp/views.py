from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from todoapp.filters import ProjectFilter
from todoapp.models import TodoModel, ProjectModel
from todoapp.serializers import TodoModelSerializer, ProjectModelSerializer


class TodoPagination(PageNumberPagination):
    page_size = 20


class TodoModelViewSet(ModelViewSet):
    queryset = TodoModel.objects.all()
    serializer_class = TodoModelSerializer
    filterset_fields = ['project']
    pagination_class = TodoPagination

    def destroy(self, request, pk=None):
        instance = get_object_or_404(self.queryset, pk=pk)
        instance.active = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectPagination(PageNumberPagination):
    page_size = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination
    filterset_class = ProjectFilter
