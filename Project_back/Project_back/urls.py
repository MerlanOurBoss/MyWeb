"""Project_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.authtoken.views import obtain_auth_token
from authorization.views import UserListView, UserDetailAPIView, UserView, login, UserLikedProducts, UserOrderProducts,\
    AddToFavs, AddToOrder, DeleteFromFavs

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('auth/', login),
    path('users/', UserListView.as_view()),
    path('users/fav', AddToFavs),
    path('users/order', AddToOrder),
    path('users/delete/fav', DeleteFromFavs),
    path('user/<int:pk>', UserView.as_view())
]
