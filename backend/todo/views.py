from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoItemSerializer, CategorySerializer
from .models import TodoItem, Category

# Create your views here.
class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class TodoItemView(viewsets.ModelViewSet):
    serializer_class = TodoItemSerializer
    queryset = TodoItem.objects.all()


