from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from api.models import Product


class User(AbstractUser):
    # login = models.CharField(max_length=30, unique=True, default="")
    # username = models.CharField(max_length=30, unique=True, default="")
    # password = models.CharField(max_length=30, default="")
    liked = models.ManyToManyField(Product, related_name='liked_products', blank=True)
    myOrders = models.ManyToManyField(Product, related_name='bought_products', blank=True)

    # ArrayField(models.IntegerField(blank=True))
    # myOrders = ArrayField(models.IntegerField(blank=True))

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"


@receiver(post_save, sender=User)
def create_user_token(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)
