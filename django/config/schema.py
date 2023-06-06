import graphene
from graphene_django import DjangoObjectType
from todoapp.models import TodoModel, ProjectModel
from authapp.models import CustomUser


class TodoType(DjangoObjectType):
    class Meta:
        model = TodoModel
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = ProjectModel
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = CustomUser
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)

    def resolve_all_todos(self, info):
        return TodoModel.objects.all()

    def resolve_all_projects(self, info):
        return ProjectModel.objects.all()

    def resolve_all_users(self, info):
        return CustomUser.objects.all()


schema = graphene.Schema(query=Query)
