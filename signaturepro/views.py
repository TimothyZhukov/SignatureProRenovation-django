from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def services(request):
    return render(request, 'pages/services.html')

def about(request):
    return render(request, 'pages/about.html')

def gallery(request):
    return render(request, 'pages/gallery.html')