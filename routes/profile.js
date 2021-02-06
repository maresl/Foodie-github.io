const express = require(`express`)
const router = express.Router()
const profileCtrl = require(`../controllers/profile`)

router.get(`/update`, profileCtrl.update)
router.post(`/addUpdates`, profileCtrl.addUpdates)
router.get(`/:id`, profileCtrl.index)

module.exports = router
