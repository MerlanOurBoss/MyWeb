from django.db import models
import json

class Company(models.Model):
  name = models.CharField(max_length=200)
  city = models.CharField(max_length=20)
  description = models.TextField()
  address = models.TextField()


  def to_json(self):
    data = {}
    data = {
      "name": self.name,
      "city": self.city,
      "description": self.description,
      "address": self.address
    }
    return data

  def __str__(self):
    return self.name

  class Meta:
    verbose_name = "Company"
    verbose_name_plural = 'Company'

class Vacancy(models.Model):
  name = models.CharField(max_length=200)
  salary = models.FloatField()
  description = models.TextField()
  company = models.ForeignKey(Company, on_delete=models.CASCADE, blank=True, null=True)

  def to_json(self):
    data = {}
    data = {
      "name": self.name,
      "salary": self.salary,
      "description": self.description,
    }
    return data

  def __str__(self):
    return self.name

  class Meta:
    verbose_name = "Vacancy"
    verbose_name_plural = 'Vacancy'
