from  rest_framework import viewsets
from  .models import Product
from .serializers import ProductSerializer

# Create your views here.

class ProductView(viewsets.ModelViewSet):
    serializer_class=ProductSerializer
    queryset = Product.objects.all()
    lookup_field='slug'
