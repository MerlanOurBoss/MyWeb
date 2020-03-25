from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .models import Product, Category


def products(request):
  json_prods = [p.to_json() for p in Product.objects.all()]
  return render(request, 'home.html', {'name': 'Products', 'Products': json_prods})


def home(request):
  return render(request, 'home.html', {'name': 'Root'})


def categories(request):
  json_categories = [c.to_json() for c in Category.objects.all()]
  return render(request, 'home.html', {'name': 'Categories', 'Categories': json_categories})


def category(request, id):
  json_category = Category.objects.get(id=id).to_json()
  return render(request, 'home.html', {'name': 'Category', 'Category': json_category})


def product(request, id):
  json_product = Product.objects.get(id=id).to_json()
  return render(request, 'home.html', {'name': 'Product', 'Product': json_product})


def prodcat(request, id):
  json_prods = Product.objects.filter(category=id)
  json_prods = [p.to_json() for p in json_prods]
  return render(request, 'home.html', {'name': 'Products of Category ' + str(id), 'Products': json_prods})
