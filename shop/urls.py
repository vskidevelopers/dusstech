from django.urls import path,include
from rest_framework import routers

from .views import  AddToCartView, ProductView,RegisterView, RetrieveUserView,CartItemDeleteView,CartView,TeamView


router=routers.DefaultRouter()
router.register(r'products', ProductView, 'product')
router.register(r'team', TeamView, 'team')
# router.register(r'cart', CartViewSet, 'cart')


urlpatterns = [
    path('auth/register/', RegisterView.as_view()),
    path('auth/me/', RetrieveUserView.as_view()),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),

    # CART

    path('shop/', include(router.urls)),
    # path('add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),
    path('order-items/<pk>/delete/', CartItemDeleteView.as_view(), name='order-item-delete'),
    path('cart/<int:id>/', CartView.as_view(), name='cart-summary'),
    path('cart/add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),

    # TEAM
    path('teams/', include(router.urls)),
    # path('team/',TeamView.as_view())
]