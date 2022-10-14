from  rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.http import Http404
from rest_framework.decorators import action
from django.shortcuts import  get_object_or_404
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView,DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model

from  .models import Product, CartItem, Cart
from .serializers import CartSerializer, ProductSerializer, UserCreateSerializer, UserSerializer
User=get_user_model()
# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        data = request.data

        serializer = UserCreateSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_201_CREATED)

class RetrieveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_200_OK)



class ProductView(viewsets.ModelViewSet):
    serializer_class=ProductSerializer
    queryset = Product.objects.all()
    lookup_field='slug'

class CartItemDeleteView(DestroyAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = CartItem.objects.all()

class CartView(APIView):
    serializer_class = CartSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request, *args, **kwargs):
        try:
            user = User.objects.get(pk=int(kwargs.get('id')))
            cart = Cart.objects.get(user=user.id, ordered=False)
            print("#######")
            print("CART :",CartSerializer(cart).data)
            print("user :",user)
            return Response(status=status.HTTP_200_OK, data={"Cart ": CartSerializer(cart).data})
        except ObjectDoesNotExist:
            raise Http404("You do not have an active order")




# class CartViewSet(viewsets.ModelViewSet):
#     queryset =Cart.objects.all().order_by('id')
#     serializer_class=CartSerializer

#     @action(methods=['get'], detail=True,url_path='cart/(?P<userId>[^/.]+)', url_name='cart')
#     def get_cart(self, request, *args, **kwargs,):
#         try:
#             user = User.objects.get(pk=int(kwargs.get('userId')))
#             cart=Cart.objects.get(user=user.id
#             )
#             print("#######")
#             print("CART :",CartSerializer(cart).data)
#             print("user :",user)
#             return Response(status=status.HTTP_200_OK, data={"Cart ": CartSerializer(cart).data})
#         except ObjectDoesNotExist:
#             raise Http404("You do not have an active cartorder")