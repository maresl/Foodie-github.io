const express = require(`express`)
const router = express.Router()
const homeCtrl = require(`../controllers/home`)

router.get(`/`, homeCtrl.home)
router.get(`/register`, homeCtrl.register)

module.exports = router