const data = require('../payload.json');
var fs = require('fs');
const filtered_keys = ['cvrNummer', 'status', 'telefonNummer'];

const getAll = function(){
    var outputFilename = 'my.json';

    fs.writeFile(outputFilename, JSON.stringify(data, null, 4), function(err) {
    if(err) {
        console.log(err);
        }else {
        console.log("JSON saved to " + outputFilename);
        }
    }); 
    var obj = data['hits']['hits'][0]['_source']['Vrvirksomhed'];
    //return obj;
    return filter(obj);
}

const filter = function(raw_data){
    const filtered = Object.keys(raw_data)
      .filter(key => filtered_keys.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw_data[key];
        return obj;
      }, {});
  
    console.log(filtered);
    return filtered;
}

module.exports = {
    getAll
};