# build env

FROM node:14.16.0-alpine3.10 as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

RUN npm run build


# prod env

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html/posts

CMD ["nginx", "-g", "daemon off;"]
