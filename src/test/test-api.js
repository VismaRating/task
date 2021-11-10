process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const  app = require('../app');
var localhost = "http://localhost:8080";
chai.use(chaiHttp);

describe('/GET data', () => {
  after(function (done) {
    app.server.close(done);
  })

 it('it should GET all the data', (done) => {
  chai.request(localhost)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.all.keys(['CompanyName', 'Address', 'City', 'CompanyForm', 'Email', 'Industry', 'PhoneNumber', 'PostalCode', 'Status']);
      done();
    });
 });
});