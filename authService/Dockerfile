FROM node:14

RUN mkdir -p server

WORKDIR server

COPY package*.json /

RUN npm install

COPY . /

EXPOSE 8080

CMD ["npm", "start"]

