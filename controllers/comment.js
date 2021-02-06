const Post = require(`../models/Post`)
module.exports = {
    comment, 
}

function comment(req, res){
    const postId = req.params.id
    req.body.owner = req.user
    Post.findById(postId, function(err, targetPost){
        targetPost.comments.push(req.body)
        targetPost.save()
        res.redirect(`../../feed`)
    })
}

