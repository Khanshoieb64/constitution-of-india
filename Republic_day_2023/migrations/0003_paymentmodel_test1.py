# Generated by Django 4.1.5 on 2023-01-21 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Republic_day_2023', '0002_remove_paymentmodel_status2'),
    ]

    operations = [
        migrations.AddField(
            model_name='paymentmodel',
            name='test1',
            field=models.CharField(default='go', max_length=10),
        ),
    ]
