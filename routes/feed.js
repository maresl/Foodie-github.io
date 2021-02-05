const express = require(`express`)
const router = express.Router()
const feedCtrl = require(`../controllers/feed`)

router.get(`/`, feedCtrl.index)

module.exports = router
