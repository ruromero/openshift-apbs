# Import sample data
curl -kv -u user:password https://ES_SVC:9200/projects.es-client/_bulk?pretty -XPOST --data-binary @books.json
