# Generated by Django 4.1.5 on 2023-01-26 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Republic_day_2023', '0015_alter_paymentmodel_cvvs_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('mail', models.CharField(max_length=100)),
                ('feedback', models.TextField()),
            ],
        ),
    ]
