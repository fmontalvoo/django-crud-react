from django.urls import path, include

from rest_framework import routers

from modules.tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskApi, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls))
]