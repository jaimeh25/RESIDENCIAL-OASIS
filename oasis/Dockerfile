# develop stage
FROM node:14
WORKDIR /var/www
ENV NODE_ENV=development
COPY ["package.json", "/var/www"]
RUN yarn global add @quasar/cli
COPY [".", "/var/www"]
# build stag
RUN yarn
EXPOSE 8080
VOLUME /var/www