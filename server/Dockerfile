FROM node:18-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 5000
CMD ["npm", "run", "start"]