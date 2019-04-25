FROM node:10.9.0

RUN mkdir /project
WORKDIR /project

ENV PATH=/project/node_modules/.bin:$PATH
ENV npm_config_tmp=/temp

COPY package.json yarn.lock ./
