const express = require(`express`)
const router = express.Router()
const postCtrl = require(`../controllers/post`)

router.get(`/newPost`, postCtrl.new)
router.post(`/createPost`, postCtrl.create)
router.get(`/edit/:id`, postCtrl.edit)
router.post(`/addEdit/:id`, postCtrl.addEdit)
router.delete(`/delete/:id`, postCtrl.delete)
router.post(`/comment/:id`, postCtrl.comment)

module.exports = router