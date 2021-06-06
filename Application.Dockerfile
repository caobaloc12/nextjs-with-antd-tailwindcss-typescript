FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .

RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 4000

CMD [ "yarn", "start" ]