process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
var localhost = "http://localhost:8080"
const productService = require('../services/product.service');
chai.use(chaiHttp);
const Data = require("../database/payload.json")

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