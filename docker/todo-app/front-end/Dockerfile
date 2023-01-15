FROM node:14-alpine
WORKDIR /todo/front-end
ADD ./node_modules.tar.gz .
COPY ./package.json .
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]

