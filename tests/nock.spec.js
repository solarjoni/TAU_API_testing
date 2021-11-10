const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mock response', () => {
  beforeEach(() => {
    nock('http://localhost:4000')
    .get('/users') 
    //.twice() .thrice() etc for multiple tests
    .reply(200, {
      "users" : [{ "id": "1"}] // 'user 1'
    })
  })

  it ('nock intercepts', (done) => {
    request('http://localhost:4000')
    .get('/users')
    .end((err, res) => {
      expect(res.body.users[0].id).to.be.equal('1');
      done();
    })
  })
})