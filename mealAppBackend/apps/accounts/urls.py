from django.urls import include, re_path as url


accounts_urlpatters = [
    url(r'^api/v1/', include('djoser.urls')),
    url(r'^api/v1/', include('djoser.urls.authtoken')),
]