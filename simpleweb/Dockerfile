# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./ ./
RUN yarn install

# Default command
CMD ["npm", "start"]