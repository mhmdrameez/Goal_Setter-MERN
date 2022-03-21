const asyncHandler = require('express-async-handler')

// @desc Get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler( async (req,res) =>{
    res.status(200).json({'message':'Get goals'})
})


// @desc Set goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler( async (req,res) =>{
    if(!req.body.text){
     res.status(400)
     throw  Error('Please Add a text field')
    }
    res.status(200).json({'message':'Set goals'})
})



// @desc Update goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals =asyncHandler( async (req,res) =>{
    res.status(200).json({'message':`Update goals ${req.params.id}`})
})


// @desc Get goals
//@route DELETE /api/goals/:id
//@access Private
const delGoals = asyncHandler( async (req,res) =>{
    res.status(200).json({'message':`Delete goals ${req.params.id}`})
})




module.exports={
    getGoals,
    setGoals,
    updateGoals,
    delGoals
}