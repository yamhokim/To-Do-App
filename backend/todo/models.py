from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

class TodoItem(models.Model):
    PRIORITY_CHOICES = [
        (1, 'Low'),
        (2, 'Medium'),
        (3, 'High'),
        (4, 'Urgent'),
    ]

    title = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    category = models.ManyToManyField(Category, related_name='todos')
    priority = models.IntegerField(choices=PRIORITY_CHOICES, default=2)
    created_date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
