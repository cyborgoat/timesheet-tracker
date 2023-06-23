#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.urls import (
    path,
    include,
)
from rest_framework.urlpatterns import format_suffix_patterns

from timesheet import views

urlpatterns = [
    path('tasks/', views.TaskList.as_view()),
    path('detail/<int:pk>/', views.TaskDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
