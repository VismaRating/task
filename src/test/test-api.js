process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
var localhost = "http://localhost:8080/v1"
const productService = require('../services/product.service');
chai.use(chaiHttp);
const Data = require("../data.json")

describe('/GET data', () => {
 it('it should GET all the data', (done) => {
   chai.request(localhost)
       .get('/')
       .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('array');
             res.body.length.should.be.eql(Data.length);
         done();
       });
 });
});


describe('/GET data', () => {
 it('it should GET data with priority high', (done) => {
   chai.request(localhost)
       .get('/search?attribute=priority&value=high')
       .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('array');
             res.body.length.should.be.eql(getNumber("priority", "high"));
         done();
       });
 });
});

describe('/GET data', () => {
 it('it should GET data with status pending', (done) => {
   chai.request(localhost)
       .get('/search?attribute=status&value=pending')
       .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('array');
             res.body.length.should.be.eql(getNumber("status", "pending"));
         done();
       });
 });
});

const getNumber = function(attr, value){
 var data = productService.get(attr, value);
 return data.length
}