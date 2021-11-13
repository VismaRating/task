FROM node:12
COPY ./server /var/test
WORKDIR /var/test

COPY server/package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm", "test" ]