from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.template.defaultfilters import slugify
from django.shortcuts import reverse


# Create your models here.

TAGS = (
    ('N', 'new'),
    ('H', 'hot'),
    ('S', 'sale'),
    ('O', 'offer')
)

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
    tag = models.CharField(choices=TAGS, max_length=1, null=True, blank=True)
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
