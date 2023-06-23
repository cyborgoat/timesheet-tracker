#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Serializers for experience APIs.
"""
from rest_framework import serializers

from timesheet.models import Staff


class StaffSerializer(serializers.ModelSerializer):
    """Serializer for experience."""

    class Meta:
        model = Staff
        fields = ['id', 'name']
