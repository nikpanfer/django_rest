from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase

from authapp.models import CustomUser
from todoapp.views import ProjectModelViewSet


class TestProjectsViewSet(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.client = APIClient()
        self.url = '/api/projects/'
        self.admin_name = 'admin'
        self.admin_passwd = 'admin123456'
        self.admin = CustomUser.objects.create_superuser(self.admin_name, 'admin@admin.com', self.admin_passwd)
        self.data = {"name": "test", "repo": "", "users": [1]}

    def test_projects_list(self):
        request = self.factory.get(self.url)
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_project_add_non_auth(self):
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_project_add_auth(self):
        self.client.login(username=self.admin_name, password=self.admin_passwd)
        response = self.client.post(self.url, self.data)
        self.client.logout()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestTodo(APITestCase):
    def test_todos_list(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

