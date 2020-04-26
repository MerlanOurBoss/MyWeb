from django.contrib import admin
from django.urls import path
from .views import CategoryListView, CategoryDetailAPIView, ProductListView, ProductDetailAPIView, \
    categoryProducts, CommentListView, ProductListAddAPIView

urlpatterns = [
    path('categories', CategoryListView.as_view()),
    path('categories/<int:pk>', CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products', categoryProducts),
    path('products', ProductListView.as_view()),
    path('products/<int:pk>', ProductDetailAPIView.as_view()),
    path('product/<int:pk>/comments', CommentListView.as_view()),
    path('products/edit/<int:pk>', ProductListAddAPIView.as_view()),
]
