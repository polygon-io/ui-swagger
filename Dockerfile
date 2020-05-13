FROM nginx:stable

# Copy Nginx Config
COPY .nginx.conf /etc/nginx/nginx.conf

# Copy Built App
COPY ./public/ /ui/public/
