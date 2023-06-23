from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User  # new


class Task(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=128)
    description = models.TextField()
    start = models.DateTimeField(default=timezone.now)
    end = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
