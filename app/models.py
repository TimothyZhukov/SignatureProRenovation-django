from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    phone=models.CharField(max_length=50)
    subject=models.CharField(max_length=500)

    def __str__(self):
        return self.name
