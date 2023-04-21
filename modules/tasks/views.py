from rest_framework import viewsets

from modules.tasks.models import Task
from modules.tasks.serializer import TaskSerializer

class TaskApi(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer