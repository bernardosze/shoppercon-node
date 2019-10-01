const path = require('path');

const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

//@route   GET admin/add-product
//@desc    add product
//@access   PRIVATE
router.get('/add-product', productController.getAddProduct);

//@route   POST admin/add-product
//@desc    add product
//@access   PRIVATE
router.post('/add-product', productController.postAddProduct);

module.exports = router;
