FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

# Ensure index.js is copied correctly
COPY index.js ./  
# Use ./index.js to specify current directory

CMD [ "node", "index.js" ]
