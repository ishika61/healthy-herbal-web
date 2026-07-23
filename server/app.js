const cors = require('cors')
const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')
const contactRoutes = require('./routes/contactRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '1mb' }))
app.get('/api/health', (req, res) => res.status(200).json({ success: true, message: 'Healthy Herbal API is running.' }))
app.use('/api/products', productRoutes)
app.use('/api/contact', contactRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
