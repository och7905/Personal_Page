# 1️⃣ Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 2️⃣ Serve stage
FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 8080