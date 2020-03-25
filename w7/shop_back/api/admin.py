from django.contrib import admin
from .models import Product, Category

# from . import models
# Register your models here.

admin.site.register(Product)
admin.site.register(Category)
