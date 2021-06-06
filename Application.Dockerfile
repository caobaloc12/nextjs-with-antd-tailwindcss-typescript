FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]