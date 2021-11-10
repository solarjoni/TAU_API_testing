const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('GET requests', function() {

  it('get cource id', function(done) {
    request(app)
      .get('/course/1')
      .end(function(err, res) {
        expect(res.body.id).to.be.equal('1')
        done();
      });
  });
  //localhost/courses?name=mocha
  it('get query param name', function(done) {
    request(app)
    .get('/course')
    .query({ name : 'mocha' })
    .expect(200, { id: '1', name: 'mocha' }, done);

  });
});