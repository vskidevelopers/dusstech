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

from  .models import Product, CartItem, Cart,Team
from .serializers import CartSerializer, ProductSerializer, UserCreateSerializer, UserSerializer, CartItemSerializer,TeamSerializer
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
    permission_classes = [permissions.AllowAny]

    def get(self,request, *args, **kwargs):
        try:
            user = User.objects.get(pk=int(kwargs.get('id')))
            cart = Cart.objects.get(user=user.id, ordered=False)
            cart_items=CartItem.objects.filter(
                user=user,
                ordered=False,
                cart=cart
            )
            print("#######")
            print("CART :",CartSerializer(cart).data)
            print("CartItems in cart >",CartItemSerializer(cart_items, many=True).data)
            print("user :",user)
            return Response(status=status.HTTP_200_OK, data={"cart": CartSerializer(cart).data, "cart_items":CartItemSerializer(cart_items, many=True).data})
        except ObjectDoesNotExist:
            return Response({"message": "You do not have an active order"})

class AddToCartView(APIView):
    def post(self, request, *args, **kwargs):
        print("### request ### >>>",request)
        print("### REQUEST.USER ### >>>",request.user)
        print("### REQUEST.DATA ### >>>",request.data)
        slug = request.data.get('slug', None)
        if slug is None:
            return Response({"message": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)

        product = get_object_or_404(Product, slug=slug)
        print("### Product ### >>>",product)

        cart_item_qs = CartItem.objects.filter(
            item=product,
            user=request.user,
            ordered=False
        )

        cart_qs = Cart.objects.filter(user=request.user, ordered=False)
        if cart_qs.exists():
            print("*** CART EXISTS!!!")
            cart = cart_qs[0]
            if cart_item_qs.exists():
                print("*** CART ITEM EXISTS!!!")
                cart_item = cart_item_qs.first()
                cart_item.quantity += 1
                cart_item.save()

                print("### NEW CART-ITEM>>>",cart_item)
                print("### NEW CART-ITEM QUANTITY>>>",cart_item.quantity)

            else:
                print("*** CART ITEM DOESN'T ITEM EXISTS!!!")
                cart_item = CartItem.objects.create(
                    item=product,
                    user=request.user,
                    cart=cart,
                    ordered=False
                )
                cart_item.save()
                print("*** NEW CART ITEM SAVED!!!")

            return Response(status=status.HTTP_200_OK)

        else:
            print("*** CART DOESN'T EXISTS!!!")
            ordered_date = timezone.now()
            cart = Cart.objects.create(
                user=request.user, ordered_date=ordered_date)
            if cart_item_qs.exists():
                print("*** CART ITEM EXISTS!!!")
                cart_item = cart_item_qs.first()
                cart_item.quantity += 1
                cart_item.save()

                print("### NEW CART-ITEM>>>",cart_item)
                print("### NEW CART-ITEM QUANTITY>>>",cart_item.quantity)
            else:
                print("*** CART ITEM DOESN'T ITEM EXISTS!!!")
                cart_item = CartItem.objects.create(
                    item=product,
                    user=request.user,
                    cart=cart,
                    ordered=False
                )
                cart_item.save()
                print("*** NEW CART ITEM SAVED!!!")

            return Response(status=status.HTTP_200_OK)

class TeamView(viewsets.ModelViewSet):
    serializer_class=TeamSerializer
    queryset = Team.objects.all()