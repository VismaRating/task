var expect = require('chai').expect,
  data = require('../data.json');
  
describe("Test data contain all attributes", function (){
  it("contains attributes", function(){
    for(var d of data) {
      expect(d['id']).to.be.a('number');
      expect(d['type']).to.be.a('string');
      expect(d['subject']).to.be.a('string');
      expect(d['description']).to.be.a('string');
      expect(d['priority']).to.be.a('string');
      expect(d['status']).to.be.a('string');
    }  
  })
})

  
describe("Test all data types are valid", function (){
  it("expects valid data", function(){
    for(var d of data) {
      expect(d).to.have.property('id');
      expect(d).to.have.property('type');
      expect(d).to.have.property('subject');
      expect(d).to.have.property('description');
      expect(d).to.have.property('priority');
      expect(d).to.have.property('status');
    }  
  })
})