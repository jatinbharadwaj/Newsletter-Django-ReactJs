# Generated by Django 3.1.7 on 2021-03-15 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0003_auto_20210315_1629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsletter',
            name='age',
            field=models.PositiveIntegerField(blank=True, default=0),
        ),
    ]
