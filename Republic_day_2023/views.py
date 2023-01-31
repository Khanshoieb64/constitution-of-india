from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate ,login as auth_login,logout as auth_logout
from .models import Events, PaymentModel, Feedback
from django.core.mail import send_mail
# Create your views here.

def Home(request):
    return render(request,"index.html")

def Quiz(request):
    return render(request,"quiz.html")
    
# rendering event page
def Event(request):
    e = Events.objects.all()
    d = {"events":e}
    return render(request,"event.html",d)

# for booking event
def EventAction(request,event_name):
    if request.user.is_authenticated:
        paydetail = Events.objects.get(name = event_name)
        # no_of_seat = request.POST['no_of_seat']
        # a = paydetail.cost * int(no_of_seat)
        # total_cost = a
        d = {
            "paydetail":paydetail,
            # "no_of_seat":no_of_seat,
            # "total_cost":total_cost,
        }

        return render(request,"payment.html",d)
    else:
        return redirect('login')

# Signup
def Signup(request):
    if request.method == "POST":
        Password1 = request.POST['password1']
        Password2 = request.POST['password2']
        Name = request.POST['fullname']
        Email = request.POST['mail_address']
        Mobile = request.POST['mobile_no']
        Username = request.POST['username']
        # w = User.objects.filter(username = Username).exists() == True:
        # print("#"*50," ",w)
        if Password1==Password2:
            Password = Password1
            if (User.objects.filter(username = Username).exists()) == True:
                # message username already exists
                return render(request,"errorUsertaken.html")
                # return redirect('signup')
            else:
                user=User.objects.create_user(first_name=Name,email=Email,username=Username,password=Password)
                user.last_name = Mobile
                user.save()
                return redirect('login')
        else:
            # message pass word do not match
            return render(request,"errorPass.html")
            # return redirect('signup')
    return render(request,"signup.html")
    ## signup previous func
    # if request.method == "POST":
    #     Password1 = request.POST['password1']
    #     Password2 = request.POST['password2']
    #     if Password1 == Password2:
    #         Name = request.POST['fullname']
    #         Email = request.POST['mail_address']
    #         Mobile = request.POST['mobile_no']
    #         Username = request.POST['username']
    #         Password = Password1
    #         # print(Name,Email,Mobile,Username,Password1,Password2)
    #         user=User.objects.create_user(first_name=Name,email=Email,username=Username,password=Password)
    #         user.last_name = Mobile
    #         user.save()
    #         return redirect('login')
    #     else:
    #         return HttpResponse("error")
    # return render(request,"signup.html")


def Login(request):
    if request.method == "POST":
        Username = request.POST['username']
        Password = request.POST['password']
        user = authenticate(request, username=Username, password=Password)
        if user is not None:
            auth_login(request,user)
            return redirect('/')
    return render(request,'login.html')

def Logout(request):
    auth_logout(request)
    return redirect('/')

def Payment(request,event,username):
    e = Events.objects.get(name = event)
    a = User.objects.get(username = username)

    # taking frontend input by post request
    no_of_seat = request.POST['no_of_seat']
    number_of_card = request.POST['number_of_card']
    cvv = request.POST['cvv']
    expiry_date = request.POST['expiry_date']
    name_on_card = request.POST['name_on_card']
    
    # add data of payment
    paysuccess = PaymentModel()
    paysuccess.user = username
    paysuccess.event = event
    paysuccess.cost = e.cost
    paysuccess.no_of_seat = int(no_of_seat)
    paysuccess.total_cost = e.cost * int(no_of_seat)
    paysuccess.name_on_cards = name_on_card
    paysuccess.expiry_dates = expiry_date
    paysuccess.cvvs = cvv
    paysuccess.number_of_cards = number_of_card
    paysuccess.save()
    no_of_seat = int(no_of_seat)
    email_message = f"{a.first_name} Your Have Book A Event: {e.title}, of Total Price: {e.cost * int(no_of_seat)} And Your No. of Seats That you Booked: {no_of_seat}"
    send_mail(
        'Pay done',
        email_message,
        'eventrepublic26@gmail.com',
        # [a.email],
        [a.email],
        fail_silently=False)
    # sent data to front end
    desc = e.description
    dcost = e.cost
    dtitle = e.title
    d ={
        "name":event,
        "title":dtitle,
        "desc":desc,
        "cost":dcost,
        "seat":no_of_seat,
        "total":(no_of_seat * e.cost),
        "name_on_card": name_on_card,
        "number_of_card": number_of_card,
    }
    # decrese available seat
    e.available =  e.available - int(no_of_seat)
    e.save()
    return render(request,"paymentsuccess.html",d)

def Myprofile(request):
    if request.user.is_authenticated:
        detail = User.objects.get(username = request.user)
        my_booking = PaymentModel.objects.filter(user = request.user)
        d = {"detail":detail,
        "booking":my_booking,
        }
        return render(request,"my_profile.html",d)
    else:
        return redirect('login')

def Gallery(request):
    return render(request,"gallary1.html")

def Feedbackfunc(request):
    if request.method == 'POST':
        a = request.POST['name']
        b = request.POST['email']
        c = request.POST['feedback']
        d = Feedback()
        d.name = a
        d.mail = b
        d.feedback = c
        d.save()
    return render(request,"feedback.html")

def Dashboard(request):
    return render(request,"db.html")