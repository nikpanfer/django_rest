from rest_framework.serializers import ModelSerializer

from authapp.serializers import CustomUserModelSerializer
from todoapp.models import TodoModel, ProjectModel


class ProjectModelSerializer(ModelSerializer):
    users = CustomUserModelSerializer(many=True)

    class Meta:
        model = ProjectModel
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    user = CustomUserModelSerializer()
    project = ProjectModelSerializer()

    class Meta:
        model = TodoModel
        fields = '__all__'
