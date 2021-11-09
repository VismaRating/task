const data = require('../payload.json');
const filtered_keys = ['took', 'timed_out'];
// const language = 'en'
// var translator = require('translate-json-object')(); 

// translator.init({
//     googleApiKey: 'AIzaSyCJLL9sKN_P6gAU6bqG2RhaC1TBocVxPJ8',
// });

// translator.translate(example, 'es')
//     .then(function(data) {
//       console.log(data);
//     }).catch(function(err) {
//       console.log('error ', err)
//     });

const getAll = function(){
    return filter(data);
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