from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    address = models.CharField(max_length=500, blank= True, null = True)

    def __str__(self) -> str:
        return f'{self.username} {self.last_name} {self.first_name}'

    class Meta:
        db_table = 'custom_users'
        verbose_name = 'Foydalanuvchi' 