# develop stage
FROM node:14
WORKDIR /usr/src
COPY ["package.json", "/usr/src/"]
RUN yarn global add @quasar/cli
COPY [".", "/usr/src/"]
# build stag
RUN yarn
CMD ["yarn","quasar", "dev"] 