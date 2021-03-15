from django.db import models

# Create your models here.
class newsletter(models.Model):
    email = models.EmailField(max_length=254,unique=True)
    age = models.PositiveIntegerField(default = 0, blank=True)

    def __str__(self):
        return self.email