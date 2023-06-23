from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User  # new


class Task(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="owner", blank=True, null=True)
    title = models.CharField(max_length=128)
    description = models.TextField()
    start = models.DateTimeField(default=timezone.now)
    end = models.DateTimeField(default=timezone.now)

    supervisor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="supervisor", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    finished = models.BooleanField(default=False)

    def __str__(self):
        return self.title
