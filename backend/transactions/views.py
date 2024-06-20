from django.shortcuts import render
from .serializers import TransactionSerializer
from rest_framework.views import APIView
from .models import Transaction
from rest_framework import status
from rest_framework.response import Response

class TransactionView(APIView):
    def post(self, request):
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)