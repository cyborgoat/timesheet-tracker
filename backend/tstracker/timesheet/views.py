from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from timesheet.serializers import TaskSerializer
from timesheet.models import Task


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
