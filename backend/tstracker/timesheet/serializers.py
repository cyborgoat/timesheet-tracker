#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Serializers for experience APIs.
"""
from django.contrib.auth.models import User
from rest_framework import serializers

from timesheet.models import Task


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'is_staff', 'is_superuser']


class TaskSerializer(serializers.ModelSerializer):
    """Serializer for experience."""

    owner = UserSerializer()

    class Meta:
        model = Task
        fields = '__all__'

    def create(self, validated_data):
        return Task.objects.create(**validated_data)
