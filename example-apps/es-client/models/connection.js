const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client( {
  host: [
    {
      host: process.env.ES_SVC,
      auth: process.env.ES_USER + ':' + process.env.ES_PASS,
      protocol: 'https',
      port: 9200
    }
  ]
});

module.exports = client;
