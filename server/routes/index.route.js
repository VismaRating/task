const express = require('express');
const product = require('./product.route');

const router = express.Router();

router.get('/', (req, res) => res.send('Simple Node API Version1'));
router.use('/info', product);

module.exports = router;
