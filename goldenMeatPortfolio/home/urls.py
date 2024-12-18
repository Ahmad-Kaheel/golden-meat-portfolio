from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', views.about, name='about'),
    path('about/heritage/', views.heritage, name='heritage'),
    path('about/team/', views.team, name='team'),
    path('about/corporate-governance/', views.corporate_governance, name='corporate-governance'),
    path('about/vision-mission-values/', views.vision_mission_values, name='vision-mission-values'),

    # Media Pages
    path('media/photos-videos/', views.photos_videos, name='photos-videos'),
    path('media/news-insights/', views.news_insights, name='news-insights'),

    # Commitments Pages
    path('commitments/sustainability/', views.sustainability, name='sustainability'),
    path('commitments/saudi-vision/', views.saudi_vision, name='saudi-vision'),

    # Products Page
    path('products/', views.products, name='products'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('get_portfolio_items/<slug:category_slug>/', views.get_portfolio_items, name='get_portfolio_items'),
    path('get_subcategories/<int:category_id>/', views.get_subcategories, name='get_subcategories'),
    
    # Contact Us Dropdown Pages
    path('contact-us/sales/', views.sales, name='sales'),
    path('contact-us/info/', views.contact_info, name='contact-info'),
    
]
