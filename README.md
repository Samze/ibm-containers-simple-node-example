# A simple image with instructions on how to use in IBM Containers

A simple node image that can be deployed on the IBM Container Cloud.

## Before you start

You will need a local environment for running docker commands. 
You need  to download the [IBM Containers Extension](http://www.ng.bluemix.net/docs/#starters/index-gentopic3.html#container_install) and its prerequisites. 

## Log in to IBM Containers

```
ice login --api https://api.ng.bluemix.net --user <user>  -R registry-ice.ng.bluemix.net -H https://api-ice.ng.bluemix.net/v2.0/containers
```

## Build the image

To build the image on your local machine.

```
docker build -t simplenode:latest .
```

## (Optionally) Run the image on your local machine

You can run the image on your local machine.

```
docker run -d -p 8080:8080 --name simple-node simplenode
```

## Push the image to your private registry

Find out the namespace of your private registry.

```
ice namespace get
```

Tag the image to point to your private registry.

```
ice --local tag -f simplenode:latest registry-ice.ng.bluemix.net/<namespace>/simplenode:latest
```

Push the image to your private registry.

```
ice --local push registry-ice.ng.bluemix.net/<namespace>/simplenode:latest
```

## Start a container in IBM Containers

Start a new container in IBM Containers from the image you just pushed.

```
ice run --name simplenode_1 -p 8080 <namespace>/simplenode:latest
```

Show that it is running

```
ice ps
```

## Assign a public ip address to your running container

List available public ip addresses

```
> ice ip list
Number of addresses: 3

Ip Address

129.41.252.201
129.41.252.203
129.41.252.202
```

If you do not have any ip addresses available then request a new one.

```
> ice ip request
```

Assign an existing ip address to your running container.

```
ice ip bind 129.41.252.201 simplenode_1
```

## Access your container

Point your browser at http://<ip_address>:8080
