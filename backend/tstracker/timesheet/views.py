from datetime import datetime

from django.contrib.auth.models import User
from django.http import Http404
from rest_framework import (status)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from timesheet.models import Task
from timesheet.serializers import TaskSerializer, UserSerializer


class UserDetail(APIView):
    """User information"""
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """Get current user information"""
        user: User = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


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
        start = datetime.strptime(start, '%Y-%m-%d %H:%M')
        end = datetime.strptime(end, '%Y-%m-%d %H:%M')

        if end.timestamp() <= start.timestamp():
            return Response({'status': 'End time must be later than start time.'}, status=status.HTTP_400_BAD_REQUEST)

        user_tasks = Task.objects.all().filter(owner=user)
        for t in user_tasks:
            start_occupied, end_occupied = t.start, t.end
            print(start_occupied, end_occupied, start, end)
            if end_occupied.timestamp() >= start.timestamp() >= start_occupied.timestamp() or \
                    end_occupied.timestamp() >= end.timestamp() >= start_occupied.timestamp():
                return Response({'status': 'Time slot has been occupied.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            task = Task(owner=user, title=title, description=description, start=start, end=end)
            task.save()
            return Response({'status': 'Task created! You can close the form and refresh the page.'},
                            status=status.HTTP_201_CREATED)
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
