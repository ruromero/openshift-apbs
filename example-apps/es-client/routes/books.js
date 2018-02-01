const express = require('express');
const Book = require('../models/book')
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const router = express.Router();

function getPagination(req) {
  let page = 0;
  let pageSize = 10;
  if(req.query.page !== undefined) {
    page = req.query.page;
  }
  if(req.query.pageSize !== undefined) {
    pageSize = req.query.pageSize;
  }
  return {
    page: page,
    from: page * pageSize,
    pageSize: pageSize
  }
}

function renderBooks(req, res, errors) {
  Book.findAll(getPagination(req), function(result) {
    res.render('books', { title: 'Books', books: result.data, pagination: result.pagination, errors: errors });
  }, function(error) {
    res.render('error', { message: 'Unable to find books', error: error});
  });

}

function renderBackendOffline(res) {
  res.render('error', { message: 'Unable to show books. Connect to a backend.'});
}

/* GET Books listing. */
router.get('/', function(req, res, next) {
  Book.isPersistent(function() {
    next();
  }, function() {
    renderBackendOffline(res);
  });
});

router.get('/', function(req, res, next) {
  renderBooks(req, res);
});

router.post('/', function(req, res, next) {
  // req.checkBody('name', 'Enter your full name').notEmpty();
  // req.checkBody('email', 'Enter your email').notEmpty();
  // req.sanitize('name').trim();
  // req.sanitize('name').escape();
  // req.sanitize('email').trim();
  // req.sanitize('email').escape();
  // req.sanitize('role').trim();
  // req.sanitize('role').escape();

  var errors = req.validationErrors();

  if(errors) {
    renderBooks(req, res, errors);
  } else {
    Book.create(req.body, function() {
      renderBooks(req, res);
    });
  }
});

module.exports = router;
