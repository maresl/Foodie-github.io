const express = require(`express`)
const router = express.Router()
const homeCtrl = require(`../controllers/home`)

router.get(`/`, homeCtrl.index)
router.get(`/home`, homeCtrl.home)

module.exports = router