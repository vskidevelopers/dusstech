from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.core.validators import MaxValueValidator, MinValueValidator
from django.template.defaultfilters import slugify



# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            return ValueError("Users must have an email address")
        if not username:
            return ValueError("Users must have a username")
        
        user=self.model(
            email=self.normalize_email(email).lower(),
            username=username,
            password=password,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(
            email=self.normalize_email(email).lower(),
            password = password,
            username = username,
        )
        user.is_staff = True
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email=models.EmailField(verbose_name='email', max_length=254, unique=True)
    username=models.CharField(verbose_name='username',max_length=100, unique=True)
    date_joined=models.DateTimeField(auto_now_add=True, verbose_name="date_joined")
    is_admin=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)

    objects=UserManager()

    USERNAME_FIELD ='email'
    REQUIRED_FIELDS=['username',]
    
    def __str__(self):
        return self.username
    
    def has_perm(self, permission, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_superuser



class Tags(models.TextChoices):
    NEW='new'
    HOT = 'hot'
    SALE = 'sale'
    OFFER = 'offer'

class Category(models.Model):

    name = models.CharField(max_length=100, blank=True, null=True)
    slug=models.SlugField(unique=True)

    class Meta:
        verbose_name = ("Category")
        verbose_name_plural = ("Categories")


    def __str__(self):
        return self.name

class Product(models.Model):
    """Model definition for Product."""
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="photos/", height_field=None, width_field=None, max_length=None)
    rating = models.IntegerField(default=1,validators=[MaxValueValidator(5),MinValueValidator(1)])
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)
    category=models.ForeignKey(Category, on_delete=models.CASCADE)
    tag = models.CharField(choices=Tags.choices, max_length=10, null=True, blank=True)
    slug = models.SlugField()
    featured=models.BooleanField(default=False)

    # TODO: Define fields here

    class Meta:
        """Meta definition for Product."""

        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        """Unicode representation of Product."""
        return self.title

    def save(self, *args, **kwargs):
        """Save method for Product."""
        original_slug= slugify(self.title)
        queryset= Product.objects.all().filter(slug__iexact=original_slug).count()
        count = 1
        slug=original_slug
        while(queryset):
            slug= original_slug+"-"+ str(count)
            count +=1
            queryset= Product.objects.all().filter(slug__iexact=slug).count()
        self.slug=slug

        if self.featured:
            try:
                temp =Product.objects.get(featured=True)
                if self !=temp:
                    temp.featured=False
                    temp.save()
            except Product.DoesNotExist:
                pass
        super(Product, self).save(*args, **kwargs)

    def get_absolute_url(self, **kwargs):
        """Return absolute url for Product."""
        return ("shop:product", kwargs=={
            'slug': self.slug
        })

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        print(" ### URL ###", +url)
        return url

    # TODO: Define custom methods here
