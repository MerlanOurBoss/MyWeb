from django.contrib.auth.forms import UserCreationForm
from django.views.decorators import csrf
from rest_framework import status, generics, viewsets
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Product
from api.serializers import ProductSerializer
from authorization.serializers import UserSerializer, UserCreateSerializer
# from authorization.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from authorization.models import User


class UserListView(APIView):
    def get(self, request):
        users = User.objects.all()
        ser = UserSerializer(users, many=True)
        return Response(ser.data)

    def post(self, request):
        ser = UserCreateSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(request.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserView(APIView):
    # permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    def get(self, request, pk):
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            ser = UserSerializer(user)
            return Response(ser.data)

    def put(self, request, pk):
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            print(request.data)
            user.username = request.data.get('login')
            user.password = request.data.get('password')
            user.save()
            ser = UserSerializer(user)
            return Response(ser.data)


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
@api_view(["GET"])
@permission_classes((AllowAny,))
def UserLikedProducts(request):
    return Response({'products': request.user.liked})


@csrf_exempt
@api_view(["GET"])
@permission_classes((AllowAny,))
def UserOrderProducts(request):
    return Response(request.user.myOrders)


@csrf_exempt
@api_view(["POST", "GET"])
# @permission_classes((AllowAny, ))
def AddToFavs(request):
    if request.method == "POST":
        prod_id = request.data.get('product')
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            user.liked.add(prod_id)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response({"Error": "Wrong credentials"}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            products = ProductSerializer(user.liked.all(), many=True)
            return Response(products.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"Error": "Wrong credentials"}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["POST", "GET"])
# @permission_classes((AllowAny, ))
def AddToOrder(request):
    if request.method == "POST":
        prod_id = request.data.get('product')
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            user.myOrders.add(prod_id)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response({"Error": "Wrong credentials"}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            products = ProductSerializer(user.myOrders.all(), many=True)
            return Response(products.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"Error": "Wrong credentials"}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["POST"])
# @permission_classes((AllowAny, ))
def DeleteFromFavs(request):
    if request.method == "POST":
        prod_id = request.data.get('product')
        try:
            token = Token.objects.get(key=request.headers.get('Authorization'))
        except Exception as e:
            return Response({"Error": "Authorize first"}, status=status.HTTP_400_BAD_REQUEST)
        if token:
            user = User.objects.get(username=token.user.username, password=token.user.password)
            user.liked.remove(prod_id)
            products = ProductSerializer(user.liked.all(), many=True)
            return Response(products.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"Error": "Wrong credentials"}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=status.HTTP_400_BAD_REQUEST)
    try:
        user = authenticate(username=username, password=password)
        if not user:
            try:
                user = User.objects.get(username=username, password=password)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
            if not user:
                return Response({'error': 'Invalid Credentials'},
                                status=status.HTTP_404_NOT_FOUND)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'username': token.user.username, 'id': token.user_id},
                            status=status.HTTP_200_OK)
        else:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'username': token.user.username, 'id': token.user_id},
                            status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
