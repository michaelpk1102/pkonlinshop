const express = require('express');

const authController = require('../controllers/auth.controller.js')

const router = express.Router();

router.get('/products', function(req, res){
res.render('customer/products/all-products')
})


 
module.exports = router;