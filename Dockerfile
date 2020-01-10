FROM nginx
COPY docs/ /usr/share/nginx/html/ouroboros/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf