FROM docker.elastic.co/elasticsearch/elasticsearch:5.5.2

LABEL version="1.0.0"

MAINTAINER Ruben Romero Montes <rromerom@redhat.com>

ENV ES_HOME=/usr/share/elasticsearch \
    HOME=/opt/app-root/src \
    ES_VERSION=5.5.2 \
    NAMESPACE=default \
    CLUSTER_NAME=ek-apb \
    SG_VERSION=5.5.2-16 \
    ES_JAVA_OPTS="-Xmx256m -Xms256m"

USER 0

RUN  mkdir /elasticsearch && \
     chmod a+rwX /elasticsearch

ADD bin/ ${ES_HOME}/bin/

RUN ${ES_HOME}/bin/elasticsearch-plugin install -b io.fabric8:elasticsearch-cloud-kubernetes:${ES_VERSION} && \
    ${ES_HOME}/bin/elasticsearch-plugin install -b com.floragunn:search-guard-5:${SG_VERSION} && \
    chmod a+x ${ES_HOME}/bin/run.sh && \
    chmod a+x ${ES_HOME}/plugins/search-guard-5/tools/*.sh && \
    chmod a+rwX -R ${ES_HOME} && \
    chown elasticsearch:elasticsearch -R ${ES_HOME}

WORKDIR ${HOME}

USER 1000

CMD ["sh", "/usr/share/elasticsearch/bin/run.sh"]
