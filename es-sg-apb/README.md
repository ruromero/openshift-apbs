# Elasticsearch APB demo

## apbs
Contains APBs for illustrate Elasticsearch deployment integration in a secured fashion.

```
$ apb build
Finished writing dockerfile.
Building APB using tag: [elasticsearch-apb]
Successfully built APB image: elasticsearch-apb

$ apb push -o
version: 1.0
name: elasticsearch-apb
description: This is an APB to deploy a secured Elasticsearch instance
bindable: True
async: optional
metadata:
  imageUrl: https://www.elastic.co/assets/blt9a26f88bfbd20eb5/icon-elasticsearch-bb.svg
  documentationUrl: https://www.elastic.co/guide/en/elasticsearch/reference/5.5/index.html
  displayName: Elasticsearch (APB)
plans:
  - name: default
    description: Deploys an Elasticsearch instance secured by SearchGuard
    free: True
    metadata: {}
    parameters:
    - name: ES_IMAGE
      type: string
      default: ruromero/es-apb-demo:latest
      description: Docker image with Elasticsearch with Searchguard
      title: Elasticsearch image
      required: true
    - name: CLUSTER_NAME
      type: string
      default: elasticsearch
      description: Name of the Elasticsearch cluster
      title: Elasticsearch cluster name
      required: true
    - name: elasticsearch_client_username
      type: string
      default: esclient
      title: Elasticsearch client user
      required: true
    - name: elasticsearch_client_password
      type: string
      title: Elasticsearch client password
      description: A random alphanumeric string if left blank
      display_type: password
      required: false

Found registry IP at: 172.30.1.1:5000
Building image with the tag: 172.30.1.1:5000/openshift/elasticsearch-apb
Successfully pushed image: 172.30.1.1:5000/openshift/elasticsearch-apb
https://asb-1338-ansible-service-broker.172.17.0.1.nip.io/ansible-service-broker
Successfully bootstrapped Ansible Service Broker
Successfully relisted the Service Catalog
```

## images
Contains Docker images to be used by the APBs

## es-client
Creates a sample nodejs application to test the APB binding. Populates some sample books into Elasticsearch and then shows in a table.

```
$ oc new-app nodejs:6~https://github.com/ruromero/openshift-apbs --context-dir=example-apps/es-client
--> Found image d5b68e7 (2 days old) in image stream "openshift/nodejs" under tag "6" for "nodejs:6"

    Node.js 6
    ---------
    Node.js 6 available as docker container is a base platform for building and running various Node.js 6 applications and frameworks. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

    Tags: builder, nodejs, nodejs6

    * A source build using source code from https://github.com/ruromero/openshift-apbs will be created
      * The resulting image will be pushed to image stream "es-apb-demo:latest"
      * Use 'start-build' to trigger a new build
    * This image will be deployed in deployment config "es-apb-demo"
    * Port 8080/tcp will be load balanced by service "es-apb-demo"
      * Other containers can access this service through the hostname "es-apb-demo"

--> Creating resources ...
    imagestream "es-apb-demo" created
    buildconfig "es-apb-demo" created
    deploymentconfig "es-apb-demo" created
    service "es-apb-demo" created
--> Success
    Build scheduled, use 'oc logs -f bc/es-apb-demo' to track its progress.
    Application is not exposed. You can expose services to the outside world by executing one or more of the commands below:
     'oc expose svc/es-apb-demo'
    Run 'oc status' to view your app.
```
