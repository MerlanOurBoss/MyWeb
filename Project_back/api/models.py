from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=90)
    gender = models.IntegerField()

    def __str__(self):
        return str(self.id) +' '+ self.name + " " + str(self.gender)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Product(models.Model):
    name = models.CharField(max_length=90)
    price = models.CharField(max_length=30)
    img = models.CharField(max_length=250)
    img2 = models.CharField(max_length=250)
    img3 = models.CharField(max_length=250)
    img4 = models.CharField(max_length=250)
    description = models.CharField(max_length=180)
    rating = models.FloatField(default=0)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    orderCount = models.IntegerField()
    available = models.BooleanField(default=True)
    gender = models.IntegerField()

    @property
    def comments(self):
        return self.comment_set.all()

    def __str__(self):
        return self.name + " " + str(self.gender) + " " + str(self.price)

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"


class Comment(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    userName = models.CharField(max_length=60)
    body = models.CharField(max_length=80)

    def __str__(self):
        return str(self.product) + " " + self.userName + " " + self.body

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"


