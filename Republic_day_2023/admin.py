from django.contrib import admin
from .models import Events, PaymentModel, Feedback
# Register your models here.

admin.site.register(Events)
admin.site.register(PaymentModel)
admin.site.register(Feedback)
