from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Notification, Wallet

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['first_name'] = user.first_name
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'confirm_password', 'phone_number', 'transaction_pin']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        if not data['transaction_pin'].isdigit() or len(data['transaction_pin']) != 4:
            raise serializers.ValidationError("Transaction PIN must be a 4-digit number")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create(**validated_data)
        return user

class TransferSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=150)
    amount = serializers.IntegerField()
    transaction_pin = serializers.CharField(max_length=4)
    

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'is_read', 'date_sent']

class WalletSerializer(serializers.ModelSerializer):
    wallet_name = RegisterSerializer()
    class Meta:
        model = Wallet
        fields = ['id', 'wallet_name', 'balance', 'last_funded']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ['date_joined']