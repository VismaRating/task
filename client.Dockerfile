FROM node:12
COPY ./client /var/client
WORKDIR /var/client 

COPY client/package*.json ./

RUN npm install
COPY . .
CMD ["npm", "start"]