
const productService = require('../services/product.service');

const get = function(req, res){
 console.log(`get all`)
 res.send(productService.get())
}

module.exports = {
 get
};