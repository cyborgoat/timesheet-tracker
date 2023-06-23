from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from timesheet.serializers import StaffSerializer
from timesheet.models import Staff


class StaffViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Staff.objects.all().order_by('id')
    serializer_class = StaffSerializer
    permission_classes = [permissions.IsAuthenticated]