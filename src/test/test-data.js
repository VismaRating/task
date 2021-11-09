var expect = require('chai').expect,
  data = require('../database/payload.json');
  
describe("Test data have valid keys", function (){
  it("expects valid data", function(){
      var d = data['hits']['hits'][0]['_source']['Vrvirksomhed'];
      var arrayLength = d.beliggenhedsadresse.length;
      lastIndex = arrayLength - 1;
       
      expect(d.navne[0]).to.have.property('navn');
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('vejnavn');
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('husnummerFra');
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('postnummer');
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('postdistrikt');
      expect(d).to.have.property('telefonNummer');
      expect(d).to.have.property('obligatoriskEmail');  
      expect(d.virksomhedsstatus[0]).to.have.property('status');
      expect(d.virksomhedsform[0]).to.have.property('langBeskrivelse');  
      expect(d.hovedbranche[0]).to.have.property('branchekode');  
  })
})