FROM node:14
RUN mkdir -p /app

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install react-scripts -g
COPY . /

EXPOSE 3000

CMD ["npm", "start"]
