from django.db import models

from authapp.models import CustomUser


# Create your models here.
class ProjectModel(models.Model):
    name = models.CharField(max_length=50)
    repo = models.URLField(blank=True, null=True)
    users = models.ManyToManyField(CustomUser)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class TodoModel(models.Model):
    project = models.ForeignKey(ProjectModel, on_delete=models.CASCADE)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True, editable=False)
    updated = models.DateTimeField(auto_now=True, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ['created']