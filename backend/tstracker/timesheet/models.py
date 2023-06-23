from django.db import models
from django.utils import timezone


class Staff(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Task(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    start = models.DateTimeField(default=timezone.now)
    end = models.DateTimeField(default=timezone.now)
    responser = models.ForeignKey(Staff, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
