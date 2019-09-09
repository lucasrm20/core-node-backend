const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');

const app = require('../../index');

describe('Unit testing the index route /', function() {

  describe('GET /', function() {

    it('should return status 200', function() {
      return request(app)
        .get('/')
        .then(function(res) {
          assert.equal(res.status, 200);
        });
    });

  });
});

describe('Unit testing the error handlers', function() {

  describe('GET /invalid', function() {

    it('should return status 404 to an invalid route', function() {
      return request(app)
        .get('/invalid')
        .then(function(res) {
          assert.equal(res.status, 404);
        });
    });

    it('should return info about the error', function() {
      return request(app)
        .get('/invalid')
        .then(function(res) {
          assert.property(res.body, 'status');
          assert.property(res.body, 'message');
        });
    });

  });
});
