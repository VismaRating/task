process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
var localhost = "http://localhost:8080"
chai.use(chaiHttp);

describe('/GET data', () => {
 it('it should GET all the data', (done) => {
   chai.request(localhost)
       .get('/')
       .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object');
         done();
       });
 });
});