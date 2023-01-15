FROM node:14-alpine
WORKDIR /todo/back-end
ADD ./node_modules.tar.gz .
COPY ./package.json .
EXPOSE 3001
RUN ["npm", "install"]
ENTRYPOINT [ "npm", "start"]