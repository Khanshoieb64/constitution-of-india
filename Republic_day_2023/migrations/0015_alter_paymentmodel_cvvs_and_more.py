# Generated by Django 4.1.5 on 2023-01-25 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Republic_day_2023', '0014_paymentmodel_cvvs_paymentmodel_expiry_dates_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentmodel',
            name='cvvs',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='paymentmodel',
            name='expiry_dates',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='paymentmodel',
            name='name_on_cards',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='paymentmodel',
            name='number_of_cards',
            field=models.IntegerField(),
        ),
    ]
