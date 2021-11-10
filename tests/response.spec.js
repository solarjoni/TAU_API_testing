const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('response', () => {
  it('json response', (done) => {
    request(app)
    .get('/course')
    .end((err, res) => {
      expect(res.body.id).to.be.equal('1');
      done();
    })
  });

  it('text response', () => {
    request(app)
    .get('/course')
    .end((err, res) => {
      expect(res.text).to.contain('1');
    })
  });

  it('status repsonse', () => {
    request(app)
    .get('/course')
    .end((err, res) => {
      expect(res.ok).to.true;
    })
  });
});