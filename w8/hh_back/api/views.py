from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.
from . models import Company, Vacancy


def vacancies(request):
  if request.method == 'GET':
       json_vacas = [p.to_json() for p in Vacancy.objects.all()]
       return JsonResponse(json_vacas, safe=False)
  else:
       return JsonResponse("error", safe=False)


def companies(request):
  if request.method == 'GET':
      json_companies = [c.to_json() for c in Company.objects.all()]
      return JsonResponse(json_companies, safe=False)
  else:
      return JsonResponse("error", safe=False)


def company(request, id):
  if request.method == 'GET':
      json_company = Company.objects.get(id=id).to_json()
      return JsonResponse(json_company, safe=False)
  else:
      return JsonResponse("error", safe=False)


def vacnacy(request, id):
  if request.method == 'GET':
       json_vacancy = Vacancy.objects.get(id=id).to_json()
       return JsonResponse(json_vacancy, safe=False)
  else:
       return JsonResponse("error", safe=False)


def vacat(request, id):
  if request.method == 'GET':
       json_vacas = Vacancy.objects.filter(company=id)
       json_vacas = [p.to_json() for p in json_vacas]
       return JsonResponse(json_vacas, safe=False)
  else:
       return JsonResponse("error", safe=False)


def vacnats(request):
  if request.method == 'GET':
       json_vacancy = [v.to_json() for v in Vacancy.objects.all().order_by('-salary')[:10]]
       return JsonResponse(json_vacancy, safe=False)
  else:
       return JsonResponse("error", safe=False)
