FROM registry-ice.ng.bluemix.net/ibmnode:latest
ADD helloworld.js helloworld.js
EXPOSE 8080
ENTRYPOINT ["node", "helloworld.js"]