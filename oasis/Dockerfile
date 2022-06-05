# develop stage
FROM node:16.15.1
WORKDIR /usr/src
COPY ["package.json", "/usr/src/"]
RUN yarn global add @quasar/cli
COPY [".", "/usr/src/"]
# build stag
RUN yarn
RUN quasar build