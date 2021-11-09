FROM node:12
COPY ./src /var/task
WORKDIR /var/task 

COPY src/package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]