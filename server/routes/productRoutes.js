const express = require('express')
const { getProduct, getProducts } = require('../controllers/productController')

const router = express.Router()
router.get('/', getProducts)
router.get('/:identifier', getProduct)

module.exports = router
