const express = require(`express`)
const router = express.Router()
const postCtrl = require(`../controllers/post`)

router.get(`/newPost`, postCtrl.new)
router.post(`/createPost`, postCtrl.create)
router.delete(`/delete/:id`, postCtrl.delete)
router.post(`/comment/:id`, postCtrl.comment)

module.exports = router