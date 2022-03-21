const express = require ('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, delGoals } = require('../controllers/goalController')



const {protect} = require('../middleware/authMiddleware')



router.route('/').get(protect, getGoals).post(protect,setGoals)
router.route('/:id').put(protect,updateGoals).delete(protect,delGoals).put(protect,updateGoals)

// router.get('/',getGoals)
// router.post('/',setGoals)
// router.put('/:id',updateGoals)
// router.delete('/:id',delGoals)




module.exports = router