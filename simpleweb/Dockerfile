# Specify a base image
FROM node:16-alpine

# Install some dependencies
COPY ./ ./
RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force && \
    yarn install

# Default command
CMD ["npm", "start"]