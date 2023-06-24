from django.contrib.auth.models import User
from django.http import Http404
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from timesheet.serializers import TaskSerializer
from timesheet.models import Task
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import (status)


class TaskList(APIView):
    """
    List all snippets, or create a new task.
    """
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        snippets = Task.objects.all()
        serializer = TaskSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user: User = request.user
        title = request.data.get('title')
        description = request.data.get('description')
        start = request.data.get('start')
        end = request.data.get('end')
        try:
            task = Task(owner=user, title=title, description=description, start=start, end=end)
            task.save()
            return Response({'status': 'Task created'}, status=status.HTTP_201_CREATED)
        except:
            return Response({'status': 'Create task failed'}, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    """
    Retrieve, update or delete a task instance.
    """

    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        task = self.get_object(pk)

        # is_active = request.data.get('is_active')
        finished = request.data.get('finished')
        # task.is_active = is_active
        task.finished = finished
        task.save()

        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        task = self.get_object(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
