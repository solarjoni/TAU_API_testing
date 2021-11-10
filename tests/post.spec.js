const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('POST requests', () => {
  it('json response', (done) => {
    request(app)
    .post('/course')
    .send({ name: 'supertest' })
    .expect(200)
    .end((err, res) => {
    expect(res.body.name).to.be.equal('supertest');
    done();
    })
  });

  it('form response', function(done) {
    //this.timeout(500);
    request(app)
    .post('/course')
    .send('name=supertest')
    .set('Accept', 'application/x-www-form-urlencoded')
    .end(function(err, res) {
    expect(200, { "id": "2", "name": "supertest" });
    done();
    })
  })
})