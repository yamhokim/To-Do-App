from django.contrib import admin
from .models import TodoItem, Category

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)  
    search_fields = ('name',)

class TodoItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'category', 'priority', 'created_date', 'completed')
    list_filter = ('category', 'priority', 'completed')
    search_fields = ('title', 'description')

# Register your models here.
admin.site.register(TodoItem, TodoItemAdmin)
admin.site.register(Category, CategoryAdmin)
