from django.db import models
# Create your models here.
class Events(models.Model):
    name = models.CharField(primary_key=True,max_length=50)
    title = models.CharField(max_length=150)
    description = models.TextField()
    date = models.DateField(auto_now=False)
    times = models.CharField(max_length=100,default="01/01/2000")
    available = models.IntegerField(default="01/01/2000")
    img = models.FileField(upload_to="media/event")
    location = models.CharField(max_length=200,default="Enter The Location")
    cost = models.FloatField()

class PaymentModel(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)
    user = models.CharField(max_length=100)
    event = models.CharField(max_length=60)
    cost = models.FloatField()
    no_of_seat = models.IntegerField()
    total_cost = models.FloatField()
    # payment detail
    name_on_cards = models.CharField(max_length=200)
    expiry_dates =  models.CharField(max_length=200)
    cvvs = models.CharField(max_length=100) 
    number_of_cards = models.IntegerField()
    status = models.CharField(max_length=100,default="paid")

class Feedback(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    mail = models.CharField(max_length=100)
    feedback = models.TextField()