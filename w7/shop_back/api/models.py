from django.db import models
import json


# Create your models here.

class Category(models.Model):
  category = models.CharField(max_length=200)

  def to_json(self):
    data = {}
    data = {
      "category": self.category
    }
    return data

  class Meta:
    verbose_name = "Category"
    verbose_name_plural = 'Categories'

  def __str__(self):
    return self.category


class Product(models.Model):
  name = models.CharField(max_length=200)
  price = models.FloatField()
  description = models.TextField()
  count = models.IntegerField(default=0)
  category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)

  def to_json(self):
    data = {}
    data = {
      "name": self.name,
      "price": self.price,
      "description": self.description,
      "count": self.count
    }
    return data

  def __str__(self):
    return self.name

  class Meta:
    verbose_name = "Product"
    verbose_name_plural = 'Products'
