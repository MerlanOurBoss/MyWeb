from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from authorization.models import User
from authorization.serializers import UserSerializer
from .models import Product, Category, Comment
from rest_framework import status, generics
from .serializers import CategorySerializer, CommentSerializer, ProductSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        ser = CategorySerializer(categories, many=True)
        return Response(ser.data, status=status.HTTP_202_ACCEPTED)

    def post(self, request):
        ser = CategorySerializer(request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        ser = ProductSerializer(products, many=True)
        return Response(ser.data)

    def post(self, request):
        ser = ProductSerializer(request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = (IsAuthenticated,)


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = (IsAuthenticated,)

class ProductListAddAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = (IsAuthenticated,)


@api_view(['GET'])
@csrf_exempt
def categoryProducts(request, id):
    if request.method == 'GET':
        products = Category.objects.get(id=id).product_set.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    else:
        return Response({"error": "Wrong request method"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CommentListView(APIView):
    def get(self, request, pk):
        comments = Product.objects.get(id=pk).comment_set.all()
        ser = CommentSerializer(comments, many=True)
        return Response(ser.data)

    def post(self, request, pk):
        body = request.data.get('body')
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if body == "":
            return Response({"Error": "THe body is empty"}, status=status.HTTP_400_BAD_REQUEST)
        comment = Comment.objects.create(product_id=pk, userName=token.user.username, body=body)
        comment.save()
        comments = Product.objects.get(id=pk).comment_set.all()
        ser2 = CommentSerializer(comments, many=True)
        return Response(ser2.data, status=status.HTTP_201_CREATED)
