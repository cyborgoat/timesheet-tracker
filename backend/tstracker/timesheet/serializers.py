#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Serializers for experience APIs.
"""
from rest_framework import serializers
from django.contrib.auth.models import User
from timesheet.models import Task


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class TaskSerializer(serializers.ModelSerializer):
    """Serializer for experience."""

    owner = UserSerializer()

    class Meta:
        model = Task
        fields = '__all__'

    def create(self, validated_data):
        return Task.objects.create(**validated_data)
