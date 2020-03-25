from django.urls import path

from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('api/products', views.products, name='products'),
  path('api/categories', views.categories, name='categories'),
  path('api/products/<int:id>/', views.product, name='product'),
  path('api/categories/<int:id>/', views.category, name='category'),
  path('api/categories/<int:id>/products', views.prodcat, name='productofcategory'),
]
