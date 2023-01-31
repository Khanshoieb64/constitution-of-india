from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.Home,name='home'),
    path('quiz',views.Quiz,name='quiz'),
    path('events',views.Event,name="events"),
    path('signup',views.Signup,name="signup"),
    path('login',views.Login,name="login"),
    path('logout',views.Logout,name="logout"),
    path('event/<str:event_name>',views.EventAction,name="eventaction"),
    path('event/payment/<str:event>/<str:username>',views.Payment,name="payment"),
    path('myprofile',views.Myprofile,name="myprofile"),
    path('gallery',views.Gallery,name="gallery"),
    path('feedback',views.Feedbackfunc,name="feedback"),
    path('dashboard',views.Dashboard,name="dashboard"),
] 

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)