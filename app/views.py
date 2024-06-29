from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse

def contact(request):
    if request.method=="POST":
        contact = Contact()
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')

        contact.name = name
        contact.email = email
        contact.phone = phone
        contact.subject = subject
        contact.save()
        return render(request, 'pages/contact_sent.html')
    return render(request, 'pages/contact.html')
