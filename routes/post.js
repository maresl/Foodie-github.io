const express = require(`express`)
const router = express.Router()
const postCtrl = require(`../controllers/post`)

router.get(`/new/:id`, postCtrl.new)

module.exports = router