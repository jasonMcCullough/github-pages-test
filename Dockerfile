FROM node:lts

COPY . /docusaurus-example
WORKDIR /docusaurus-example

EXPOSE 3000

RUN npm ci