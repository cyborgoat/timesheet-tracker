#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Serializers for experience APIs.
"""
from rest_framework import serializers
from timesheet.models import Task


class TaskSerializer(serializers.ModelSerializer):
    """Serializer for experience."""

    class Meta:
        model = Task
        fields = '__all__'