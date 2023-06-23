#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.urls import (
    path,
    include,
)
from rest_framework.routers import DefaultRouter

from timesheet import views

router = DefaultRouter()
router.register('staffs', views.StaffViewSet)

app_name = 'timesheet'

urlpatterns = [
    path('', include(router.urls)),
]
