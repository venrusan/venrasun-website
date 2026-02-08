# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config as TEMPLATE
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 10000

# Render-compatible startup
CMD ["sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]


# docker compose build
# docker compose push

