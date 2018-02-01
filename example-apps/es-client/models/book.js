const esclient = require('./connection.js');
const fs = require('fs');
const path = require('path');

const IDX_NAME = 'project.' + process.env.ES_USER;
const TYPE_NAME = 'book';
const HTTP_STATUS_OK = 200;

function populateTestData() {
  fs.readFile(path.join(__dirname, '/../test/books.json'), { encoding: 'utf8' }, function (err, data) {
    esclient.bulk({
      index: IDX_NAME,
      body: data
    }, function (err, response, status) {
      console.log("Added sample books");
    });
  });
}

function createIndex(err, response) {
  esclient.indices.create({
    index: IDX_NAME,
    body: {
      settings: {
        number_of_shards: 1,
        number_of_replicas: 0
      },
      mappings: {
        book: {
          properties: {
            author: {type: "text"},
            country: {type: "text"},
            imageLink: {
              type: "text",
              index: "no"
            },
            link: {
              type: "text",
              index: "no"
            },
            pages: {type: "long"},
            title: {type: "text"},
            year: {type: "long"}
          }
        }
      }
    }
  }, function(err, response, status) {
    if(status == HTTP_STATUS_OK) {
      console.log('Index %s created', IDX_NAME);
      populateTestData();
    } else {
      console.error('Index %s could not be created. Error: ', IDX_NAME, err);
    }
  });
}

function ensureIndexExists() {
  esclient.indices.exists({
    index: IDX_NAME
  }, function(err, response) {
    if(response) {
      console.log('index %s already exists: ', IDX_NAME);
    } else {
      console.log('Need to create index: %s', IDX_NAME);
      createIndex();
    }
  });
}

ensureIndexExists();

exports.findAll = function(pagination, callbackFn, callbackErrorFn) {
  return esclient.search({
    index: IDX_NAME,
    type: TYPE_NAME,
    from: pagination.from,
    size: pagination.pageSize
  }, function (error, response, status) {
    if (error) {
      callbackErrorFn(error);
    } else {
      pagination.pages = response.hits.total / pagination.pageSize;
      let result = {
        pagination: pagination,
        data: []
      };
      response.hits.hits.forEach(function(hit) {
        result.data.push(hit._source);
      });
      callbackFn(result);
    }
  });
}

exports.create = function(book, callbackFn) {
  // TODO
}

exports.isPersistent = function(callbackFn, callbackErrorFn) {
  esclient.ping(function(err, response) {
    console.log('ping ES: %s', response);
    if(response) {
      if(callbackFn !== undefined) {
        callbackFn();
      }
    } else if(callbackErrorFn !== undefined) {
      callbackErrorFn();
    }
  });
}
