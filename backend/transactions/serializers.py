from rest_framework import serializers 
from .models import Transaction
from users.serializers import WalletSerializer
class TransactionSerializer(serializers.ModelSerializer):
  status_display = serializers.SerializerMethodField()
  wallet = WalletSerializer()

  def get_status_display(self, obj):
    return obj.get_status_display()

  class Meta:
    model = Transaction
    fields = (
        'transaction_ref_no', 
        'wallet',
        'transaction_type',
        'product',
        'price',
        'status',
        'status_display',
        'date_create'
    )