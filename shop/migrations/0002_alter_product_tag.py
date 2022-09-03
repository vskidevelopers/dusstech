# Generated by Django 4.0.5 on 2022-09-03 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='tag',
            field=models.CharField(blank=True, choices=[('NEW', 'new'), ('HOT', 'hot'), ('SALE', 'sale'), ('OFFER', 'offer')], max_length=10, null=True),
        ),
    ]
