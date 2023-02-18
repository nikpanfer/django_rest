from django_filters.rest_framework import FilterSet, CharFilter

from todoapp.models import ProjectModel


class ProjectFilter(FilterSet):
    name = CharFilter(lookup_expr='contains')

    class Meta:
        model = ProjectModel
        fields = ['name']