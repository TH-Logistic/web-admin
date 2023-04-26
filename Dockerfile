FROM node:18-alpine
WORKDIR /code

COPY package.json .
COPY package-lock.json .

EXPOSE 3000

RUN npm install

COPY . .

RUN npm run build

RUN npm i -g serve
CMD [ "npx", "serve", "-s", "build" ]



