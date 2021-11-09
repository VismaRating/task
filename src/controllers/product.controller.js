
const productService = require('../services/product.service');

const get = function(req, res){
 console.log(`get query attribute: ${req.query.attribute}, value: ${req.query.value}`)
 res.send(productService.get(req.query.attribute, req.query.value))
}

const getAll = function(req, res){
 console.log(`get all`)
 res.send(productService.getAll())
}

module.exports = {
 get,
 getAll
};