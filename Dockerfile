FROM node:16.20.2-slim as base
WORKDIR /app/docs
ENV NODE_ENV=production

COPY /docs/package.json .
RUN npm install
COPY . ../
EXPOSE 8080
# CMD [ "npm","run", "dev -host 0.0.0.0" ]