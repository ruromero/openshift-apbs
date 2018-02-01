#!/bin/bash

start_search_guard() {
  ES_UP=false

  until $ES_UP; do
    STATUSCODE=$(curl --output /dev/null --cacert ${ES_HOME}/config/secret/admin-ca --silent --head --write-out "%{http_code}" https://localhost:9200)
    if test $STATUSCODE -ne 503; then
      echo 'Elasticsearch not yet initialized...'
      sleep 10
    else
      ES_UP=true
    fi
  done

  ${ES_HOME}/plugins/search-guard-5/tools/sgadmin.sh \
      -cd ${HOME}/sgconfig \
      -ks ${ES_HOME}/config/secret/admin.jks \
      -kst JKS \
      -kspass kspass \
      -ts ${ES_HOME}/config/secret/truststore \
      -tst JKS \
      -tspass tspass \
      -nhnv \
      -icl
}

cp /etc/elasticsearch/config/* ${ES_HOME}/config
cp -R /etc/elasticsearch/secret ${ES_HOME}/config

start_search_guard &

exec ${ES_HOME}/bin/elasticsearch
