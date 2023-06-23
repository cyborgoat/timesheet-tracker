from django.http import Http404

from timesheet.serializers import TaskSerializer
from timesheet.models import Task
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import (status)


class TaskList(APIView):
    """
    List all snippets, or create a new task.
    """

    def get(self, request, format=None):
        snippets = Task.objects.all()
        serializer = TaskSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        return Response({"status": "true"}, status=status.HTTP_201_CREATED)


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
        print(request.data)
        task = self.get_object(pk)
        task.is_active = True
        task.save()

        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        task = self.get_object(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
