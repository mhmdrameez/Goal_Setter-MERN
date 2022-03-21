const jwt = require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc Register a new User
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
  
    if (!name || !email || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }

    //Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400) 
        throw new Error('User already exists')
    }


  
    
    res.json({
        message:'Register User'
    })
})

// @desc Autenicatiacte a user
//@route POST /api/users/login
//@access Private
const loginUser = asyncHandler(async(req,res)=>{
    res.json({
        message:'Login User'
    })
})


// @desc Get user data
//@route GET /api/users/me
//@access Private
const getMe = asyncHandler(async(req,res)=>{
    res.json({
        message:'user data display'
    })
})



module.exports = {
    registerUser,
    loginUser,
    getMe
}