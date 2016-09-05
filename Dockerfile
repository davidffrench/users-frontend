# create a file named Dockerfile
FROM node:argon

RUN mkdir /web
WORKDIR /web

COPY package.json /web
RUN npm install

COPY . /web

EXPOSE 8081

CMD ["npm", "start"]