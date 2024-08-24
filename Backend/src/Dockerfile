bashCopy code
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ..
EXPOSE 3100
CMD ["nodemon", "src/index.js"]