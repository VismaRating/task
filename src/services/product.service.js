const data = require('../database/payload.json');
const filteredKeys = ['navne', 'postadresse', 'cvrNummer', 'obligatoriskEmail' , 'virksomhedsstatus', 'telefonNummer', 'virksomhedsform', 'beliggenhedsadresse','hovedbranche'];
var object = {};

const get = function(){
    var obj = data['hits']['hits'][0]['_source']['Vrvirksomhed'];
    filteredData = filter(obj);
    return buildObject(filteredData);
}

const filter = function(responseData){
    const filteredData = Object.keys(responseData)
      .filter(key => filteredKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = responseData[key];
        return obj;
      }, {});
  
    console.log(filteredData);
    responseData = buildObject(filteredData);
    return filteredData;
}

const buildObject = function(filteredData){
    var arrayLength = filteredData.beliggenhedsadresse.length;
    lastIndex = arrayLength - 1; 
    object["CompanyName"] = filteredData.navne[0].navn;
    object["Address"] = filteredData.beliggenhedsadresse[lastIndex].vejnavn + " " + filteredData.beliggenhedsadresse[lastIndex].husnummerFra;
    object["PostalCode"] = filteredData.beliggenhedsadresse[lastIndex].postnummer;
    object["City"] = filteredData.beliggenhedsadresse[lastIndex].postdistrikt;
    object["PhoneNumber"]  = filteredData.telefonNummer;
    object["Email"]  = filteredData.obligatoriskEmail;
    object["Status"]  = filteredData.virksomhedsstatus[0].status;
    object["CompanyForm"] = filteredData.virksomhedsform[0].langBeskrivelse; 
    object["Industry"] = filteredData.hovedbranche[0].branchekode;
    
    return object;
}

module.exports = {
    get,
    filter, 
    filteredKeys
};
