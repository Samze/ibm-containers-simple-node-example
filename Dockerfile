FROM registry-ice.ng.bluemix.net/ibmnode:latest

ADD . /node
WORKDIR /node
RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "/node/index.js"]