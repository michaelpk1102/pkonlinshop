const express = require('express');

const authController = require('../controllers/auth.controller.js')

const router = express.Router();

router.get('/', function(req, res){
   res.redirect('/products')
})


 
module.exports = router;