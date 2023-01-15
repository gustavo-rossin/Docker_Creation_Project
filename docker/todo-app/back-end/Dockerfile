FROM node:14-alpine
WORKDIR /todo/back-end
ADD ./node_modules.tar.gz .
COPY ./package.json .
COPY . .
EXPOSE 3001
ENTRYPOINT [ "npm", "start"]