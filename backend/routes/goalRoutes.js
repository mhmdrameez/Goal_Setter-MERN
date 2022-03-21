const express = require ('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, delGoals } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(delGoals)

// router.get('/',getGoals)
// router.post('/',setGoals)
// router.put('/:id',updateGoals)
// router.delete('/:id',delGoals)




module.exports = router