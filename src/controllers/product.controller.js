
const productService = require('../services/product.service');

const getAll = function(req, res){
 console.log(`get all`)
 res.send(productService.getAll())
}

module.exports = {
 getAll
};