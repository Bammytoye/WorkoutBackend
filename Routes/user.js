const express = require ('express')

//controller functions
const { loginUser, SignupUser } = require('../controllers/userController')
const router = express.Router()

//login route
router.post('/login', loginUser) 


//signUp route
router.post('/signup', SignupUser)

module.exports = router