# VitePress needs Node 18+; 22 is the current LTS.
FROM node:22-slim AS base
WORKDIR /app/docs

# NODE_ENV=production is deliberately NOT set here: vitepress is a
# devDependency, so npm would skip it and the build would fail.
COPY docs/package.json docs/package-lock.json ./
RUN npm ci

COPY . ../

# Vite's dev server port
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
