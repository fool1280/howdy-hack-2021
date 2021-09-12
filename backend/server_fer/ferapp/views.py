from .serializers import PostSerializer
from .models import Post
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
import cv2
import os
import base64
import numpy as np
from fer import FER
# Create your views here.


class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


class PostCreate(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            encoded_string = posts_serializer.data['content'].split(',')[1]
            decoded_data = base64.b64decode(encoded_string)
            np_data = np.frombuffer(decoded_data, np.uint8)
            img = cv2.imdecode(np_data, cv2.IMREAD_UNCHANGED)
            output_image = cv2.imwrite(os.getcwd() + "test.jpg", img)
            image_load = cv2.imread(os.getcwd() + "test.jpg")
            detector = FER(mtcnn=True)
            result = detector.top_emotion(image_load)
            return Response(result[0], status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
