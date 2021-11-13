FROM node:12
COPY ./server /var/task
WORKDIR /var/task 

COPY server/package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]