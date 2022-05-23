FROM node:latest as angular-test
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build


FROM nginx:alpine as nginx-angular
VOLUME /var/cache/nginx
COPY --from=angular-test app/dist/ecommerce-webapp /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t test-angular .

