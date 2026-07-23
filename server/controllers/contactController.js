const asyncHandler = require('../utils/asyncHandler')
const AppError = require('../utils/AppError')

const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body
  if (!name?.trim() || !email?.trim() || !message?.trim()) throw new AppError('Name, email, and message are required.', 400)
  if (!/^\S+@\S+\.\S+$/.test(email)) throw new AppError('Please provide a valid email address.', 400)
  if (message.trim().length < 10) throw new AppError('Message must contain at least 10 characters.', 400)
  res.status(200).json({ success: true, message: 'Thank you for contacting Healthy Herbal.' })
})

module.exports = { createContact }
