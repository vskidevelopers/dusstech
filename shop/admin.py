from django.contrib import admin
from .models import Category, Product,Cart,CartItem
from django.contrib.auth import get_user_model

User=get_user_model()
class UserAdmin(admin.ModelAdmin):
    list_display = ("id","username", "email","is_admin","is_staff","password", "is_superuser")


class ProductAdmin(admin.ModelAdmin):
    exclude=('slug',)

class CartAdmin(admin.ModelAdmin):
    list_display = [
                    'id',
                    'user',
                    'ordered',
                    'ordered_date',
                    ]
    list_display_links = [
        'user',
    ]
    list_filter = ['ordered',]
    search_fields = [
        'user__username',
    ]

admin.site.register(User, UserAdmin)
admin.site.register(Cart,CartAdmin)
admin.site.register(CartItem)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category)