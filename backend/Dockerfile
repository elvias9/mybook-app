FROM node:16

# Create app directory
WORKDIR /app

COPY package*.json ./

# Bundle app source
COPY ./ ./

EXPOSE 5000

RUN npm i

CMD ["npm", "start"]
