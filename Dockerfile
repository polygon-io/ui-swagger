FROM pagespeed/nginx-pagespeed:stable-edge-ngx1.15

# Copy Nginx Config
# COPY .nginx.conf /etc/nginx/nginx.conf

# Copy Built App
COPY ./public/ /usr/share/nginx/html/
