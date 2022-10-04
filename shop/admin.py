from django.contrib import admin
from .models import Category, Product
from django.contrib.auth import get_user_model

User=get_user_model()
class UserAdmin(admin.ModelAdmin):
    list_display = ("id","username", "email","is_admin","is_staff","password", "is_superuser")


class ProductAdmin(admin.ModelAdmin):
    exclude=('slug',)

admin.site.register(User, UserAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category)