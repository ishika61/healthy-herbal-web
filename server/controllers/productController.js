const products = require('../data/products')
const AppError = require('../utils/AppError')
const asyncHandler = require('../utils/asyncHandler')

const getProducts = asyncHandler(async (req, res) => {
  const { category, search, sort = 'newest', inStock, page = 1, limit = 12 } = req.query
  const pageNumber = Math.max(Number.parseInt(page, 10) || 1, 1)
  const pageSize = Math.min(Math.max(Number.parseInt(limit, 10) || 12, 1), 100)
  const searchValue = search?.toLowerCase().trim()
  let filteredProducts = products.filter((product) => (!category || product.category === category) && (inStock !== 'true' || product.inStock) && (!searchValue || [product.name, product.shortDescription, product.description, product.category].some((value) => value.toLowerCase().includes(searchValue))))
  filteredProducts = [...filteredProducts].sort((first, second) => sort === 'price_asc' ? first.price - second.price : sort === 'price_desc' ? second.price - first.price : new Date(second.createdAt) - new Date(first.createdAt))
  const total = filteredProducts.length
  const data = filteredProducts.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
  res.status(200).json({ success: true, data, pagination: { page: pageNumber, limit: pageSize, total, pages: Math.ceil(total / pageSize) } })
})

const getProduct = asyncHandler(async (req, res) => {
  const product = products.find((item) => item.id === req.params.identifier || item.slug === req.params.identifier)
  if (!product) throw new AppError('Product not found.', 404)
  res.status(200).json({ success: true, data: product })
})

module.exports = { getProducts, getProduct }
