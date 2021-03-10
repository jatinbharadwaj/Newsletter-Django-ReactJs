from django.shortcuts import render
from rest_framework import viewsets
from .serializers import newsletterSerializer
from .models import newsletter


class newsletterView(viewsets.ModelViewSet):
    serializer_class = newsletterSerializer
    queryset = newsletter.objects.all()