from django.contrib import admin
from .models import TodoItem

class TodoItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'priority', 'created_date', 'completed')
    list_filter = ('category', 'priority', 'completed')
    search_fields = ('title', 'description')

# Register your models here.
admin.site.register(TodoItem, TodoItemAdmin)



