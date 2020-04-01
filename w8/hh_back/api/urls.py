from django.urls import path
from . import views

urlpatterns = [
  path('api/vacancy', views.vacancies, name='vacancy'),
  path('api/companies', views.companies, name='companies'),
  path('api/vacancy/<int:id>/', views.vacnacy, name='vacancy'),
  path('api/company/<int:id>/', views.company, name='company'),
  path('api/company/<int:id>/vacancy', views.vacat, name='vacancyofcompany'),
  path('api/vacancy/top_ten', views.vacnats, name='toptenvacns'),
]
