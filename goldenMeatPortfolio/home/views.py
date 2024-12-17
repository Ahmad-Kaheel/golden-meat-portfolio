from django.shortcuts import render
from .models import Category


def portfolio(request):
    categories = Category.objects.prefetch_related('subcategories')
    return render(request, 'products.html', {'categories': categories})

def index(request):
    return render(request, 'home/index.html')

def about(request):
    return render(request, 'home/whoweare.html') 

def heritage(request):
    return render(request, 'home/heritage.html')

def team(request):
    return render(request, 'home/team.html')

def corporate_governance(request):
    return render(request, 'home/corporate_governance.html')

def vision_mission_values(request):
    return render(request, 'home/vision_mission_values.html')

# Media Pages
def photos_videos(request):
    return render(request, 'home/photos_videos.html')

def news_insights(request):
    return render(request, 'home/news_insights.html')

# Commitments Pages
def sustainability(request):
    return render(request, 'home/sustainability.html')

def saudi_vision(request):
    return render(request, 'home/saudi_vision.html')

# Products Page
def products(request):
    categories = Category.objects.prefetch_related('subcategories')
    return render(request, 'products.html', {'categories': categories})

# Contact Us Pages
def sales(request):
    return render(request, 'home/sales.html')

def contact_info(request):
    return render(request, 'home/contact_info.html')
