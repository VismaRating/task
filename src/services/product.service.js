const data = require('../database/payload.json');
const filteredKeys = ['navne', 'postadresse', 'cvrNummer', 'obligatoriskEmail' , 'virksomhedsstatus', 'telefonNummer', 'virksomhedsform', 'beliggenhedsadresse'];
var object = {"Company Name": "", "Address": "", "Postal code and City" : "", "Phone number and email" :"", "Status": "", "Company form": "", "Industry": ""};

const getAll = function(){
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
    object["Company Name"] = filteredData.navne[0].navn
    object["Address"] = filteredData.beliggenhedsadresse[2].vejnavn
    
    return object;
}

module.exports = {
    getAll
};