# Generated by Django 4.2.2 on 2023-06-23 12:22

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.CharField(max_length=32, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('start', models.DateTimeField(default=datetime.datetime(2023, 6, 23, 12, 22, 44, 509161))),
                ('end', models.DateTimeField(default=datetime.datetime(2023, 6, 23, 12, 22, 44, 509173))),
                ('responser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timesheet.staff')),
            ],
        ),
    ]
