# Generated by Django 5.1.4 on 2024-12-15 23:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("todo", "0003_alter_todoitem_category"),
    ]

    operations = [
        migrations.AlterField(
            model_name="todoitem",
            name="category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="todo_items",
                to="todo.category",
            ),
        ),
    ]
