FROM node:15.11.0

USER root

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

USER node

CMD ["node", "./index.js"]
