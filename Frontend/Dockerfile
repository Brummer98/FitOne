FROM node:16
WORKDIR /App
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000