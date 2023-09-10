FROM node:lts
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.jso
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]