const express = require('express');
const router = express.Router({ mergeParams: true });

const productController = require('../controllers/product.controller');

router.route('/')
    .get(productController.get);

module.exports = router;
