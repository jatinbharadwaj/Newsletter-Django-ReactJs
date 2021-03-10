from django.contrib import admin

# Register your models here.
class newsletterAdmin(admin.ModelAdmin):
    list_display = ('email',)

admin.site.register(newsletter,newsletterAdmin)