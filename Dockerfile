# Use the official Node.js image.
FROM node:20 as builder

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV production
RUN mkdir /app && chown -R node:node /app

WORKDIR /app
USER node

COPY ["package.json", "package-lock.json", "./"]
COPY --chown=node:node package*.json yarn*.lock ./
# Used because we hace package-lock.json and we don't want to overwrite it
RUN npm ci --only=production && npm cache clean --force



# Use when package-lock.json is not present
# RUN npm install --roduction

# Use the official lightweight Node.js image.
FROM node:20-slim
USER node
WORKDIR /app
COPY --from=builder --chown=node:node /app /app
COPY --from=builder /usr/bin/dumb-init /usr/bin/dumb-init
EXPOSE 4000
CMD ["dumb-init", "node", "app.js"]
