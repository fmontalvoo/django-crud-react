from rest_framework import serializers

from modules.tasks.models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        #fields = ('id', 'title', 'description', 'completed')