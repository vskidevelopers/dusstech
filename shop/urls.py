from django.urls import path,include
from .views import RegisterView, RetrieveUserView


urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('me/', RetrieveUserView.as_view()),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
]