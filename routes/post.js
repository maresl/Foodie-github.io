const express = require(`express`)
const router = express.Router()
const postCtrl = require(`../controllers/post`)

router.get(`/newPost`, postCtrl.new)
router.post(`/createPost`, postCtrl.create)

module.exports = router