from dataclasses import fields
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Product,CartItem,Cart
User=get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def validate(self, data):
        user = User(**data)
        password = data.get('password')

        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {'password': serializer_errors['non_field_errors']}
        )

        return data


    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'email',)


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.name", read_only=True)
    class Meta:
        model=Product
        fields='__all__'
        lookup_field='slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }

class CartItemSerializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField()
    final_price = serializers.SerializerMethodField()
    class Meta:
        model=CartItem
        fields ='__all__'
    def get_final_price(self, obj):
            return obj.get_final_price()

    def get_item(self, obj):
        return ProductSerializer(obj.item).data
    
    def get_cart(self,obj):
        return CartSerializer(obj.cart)

class CartSerializer(serializers.ModelSerializer):
    # cart_items = serializers.SerializerMethodField()
    # total = serializers.SerializerMethodField()
    class Meta:
        model =Cart
        fields=[
            'id',
            'user',
            # 'cart_items',
            'ordered',
            # 'total'
        ]

    # def get_cart_items(self, obj):
    #     return CartItemSerializer(obj.items.all(), many=True).data
    
    # def get_total(self, obj):
    #     return obj.get_total()