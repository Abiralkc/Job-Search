const express = require('express')
const router = express.Router()
const autenticateUser = require('../middleware/authentication')
const { register, login, updateUser } = require('../controllers/auth')
router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser',autenticateUser,updateUser)

module.exports = router
