var expect = require('chai').expect,
  data = require('../database/payload.json');
const productService = require('../services/product.service');
var d = data['hits']['hits'][0]['_source']['Vrvirksomhed'];
var arrayLength = d.beliggenhedsadresse.length;
var lastIndex = arrayLength - 1;

describe("Test filter function", function (){
  it("expects valid data from filter ", function(){
      var result = productService.filter(d);
      for(var k of productService.filteredKeys){
        expect(result).to.have.property(k);  
      }
  })
})

describe("Test data have valid key navn", function (){
  it("expects valid data navn ", function(){
      expect(d.navne[0]).to.have.property('navn');
  })
})

describe("Test data have valid key vejnavn", function (){
  it("expects valid data vejnavn", function(){
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('vejnavn');
  })
})

describe("Test data have valid key husnummerFra", function (){
  it("expects valid data husnummerFra", function(){
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('husnummerFra');
  })
})

describe("Test data have valid key postnummer", function (){
  it("expects valid data postnummer", function(){
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('postnummer');
  })
})
  
describe("Test data have valid key postdistrikt", function (){
  it("expects valid data postdistrikt", function(){
      expect(d.beliggenhedsadresse[lastIndex]).to.have.property('postdistrikt');
  })
})
    
describe("Test data have valid key telefonNummer", function (){
  it("expects valid data telefonNummer", function(){
      expect(d).to.have.property('telefonNummer');
  })
})

describe("Test data have valid key obligatoriskEmail", function (){
  it("expects valid data obligatoriskEmail", function(){
      expect(d).to.have.property('obligatoriskEmail');  
  })
})
        
describe("Test data have valid key status", function (){
  it("expects valid data status", function(){
      expect(d.virksomhedsstatus[0]).to.have.property('status');
  })
})
          
describe("Test data have valid key langBeskrivelse", function (){
  it("expects valid data langBeskrivelse", function(){
      expect(d.virksomhedsform[0]).to.have.property('langBeskrivelse');  
  })
})
            
describe("Test data have valid key branchekode", function (){
  it("expects valid data branchekode", function(){
      expect(d.hovedbranche[0]).to.have.property('branchekode');   
  })
});