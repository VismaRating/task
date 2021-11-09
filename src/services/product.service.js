const data = require('../database/payload.json');
const filteredKeys = ['navne', 'postadresse', 'cvrNummer', 'obligatoriskEmail' , 'virksomhedsstatus', 'telefonNummer', 'virksomhedsform', 'beliggenhedsadresse','hovedbranche'];
var object = {};

const get = function(){
    var obj = data['hits']['hits'][0]['_source']['Vrvirksomhed'];
    return filter(obj);
}

const filter = function(responseData){
    const filtered = Object.keys(responseData)
      .filter(key => filteredKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = responseData[key];
        return obj;
      }, {});
  
    console.log(filtered);
    result = buildObject(filtered);
    return result;
}

const buildObject = function(filteredData){
    var arrayLength = filteredData.beliggenhedsadresse.length;
    lastIndex = arrayLength - 1; 
    object["Company Name"] = filteredData.navne[0].navn;
    object["Address"] = filteredData.beliggenhedsadresse[lastIndex].vejnavn + " " + filteredData.beliggenhedsadresse[lastIndex].husnummerFra;
    
    object["Postal code and City"] =  filteredData.beliggenhedsadresse[lastIndex].postnummer + " " + filteredData.beliggenhedsadresse[lastIndex].postdistrikt;
    object["Phone number and email"]  = filteredData.telefonNummer + " " + filteredData.obligatoriskEmail;
    object["Status"]  = filteredData.virksomhedsstatus[0].status;
    object["Company form"] = filteredData.virksomhedsform[0].langBeskrivelse; 
    object["Industry"] = filteredData.hovedbranche[0].branchekode;
    
    return object;
}

module.exports = {
    get
};