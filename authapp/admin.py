from django.contrib import admin

from authapp import models as mainapp_models
from authapp.forms import CustomUserCreationForm


@admin.register(mainapp_models.CustomUser)
class NewsAdmin(admin.ModelAdmin):
    add_form = CustomUserCreationForm

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username", "password1", "password2", "email"),
            },
        ),
    )

    search_fields = ["username", "first_name", "last_name", "email"]
    list_display = [
        "id",
        "username",
        "first_name",
        "last_name",
        "age",
        "email",
        "is_superuser",
        "is_staff",
        "is_active",
        "last_login",
        "date_joined",
    ]
    ordering = ["-is_superuser", "-is_staff", "-is_active", "username"]
    list_per_page = 15
    list_filter = ["is_superuser", "is_staff", "is_active"]

    def get_fieldsets(self, request, obj=None):
        if not obj:
            return self.add_fieldsets
        return super().get_fieldsets(request, obj)

    def get_form(self, request, obj=None, **kwargs):
        """
        Use special form during user creation
        """
        defaults = {}
        if obj is None:
            defaults["form"] = self.add_form
        defaults.update(kwargs)
        return super().get_form(request, obj, **defaults)