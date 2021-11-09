const express = require('express');
const product = require('./product.route');

const router = express.Router();

router.use('/get', product);

router.get('/', (req, res) => res.send('Sample Node API Version1'));

module.exports = router;