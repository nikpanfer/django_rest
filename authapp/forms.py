from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UsernameField, UserCreationForm, ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django import forms
from django.forms import EmailField


class CustomUserCreationForm(UserCreationForm):
    field_order = [
        "username",
        "password1",
        "password2",
        "email",
    ]

    class Meta:
        model = get_user_model()
        fields = (
            "username",
            "email",
        )
        field_classes = {"username": UsernameField, "email": EmailField}