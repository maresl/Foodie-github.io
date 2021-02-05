const express = require(`express`)
const router = express.Router()
const profileCtrl = require(`../controllers/profile`)

router.get(`/:id`, profileCtrl.index)

module.exports = router
