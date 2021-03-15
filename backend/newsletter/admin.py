from django.contrib import admin
from .models import newsletter

# Register your models here.
class newsletterAdmin(admin.ModelAdmin):
    list_display = ('email','age')

admin.site.register(newsletter,newsletterAdmin)