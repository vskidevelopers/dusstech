from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.name", read_only=True)
    class Meta:
        model=Product
        fields='__all__'
        lookup_field='slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }