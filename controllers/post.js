const Post = require(`../models/Post`)
const Restaurant = require(`../models/Restaurant`)

module.exports = {
    new: newPost,
    delete: deletePost,
    create, 
    comment
}

function newPost(req, res){
    res.render(`post/new`, {currentUser: req.user})
}

function create(req, res){
    req.body.owner = req.user
    Post.create(req.body, function(err, createdPost){
        req.user.posts.push(createdPost)
        req.user.save()
    })
    
    res.redirect(`../feed`)
}

function deletePost(req, res) {
    const postId = req.params.id
    Post.deleteOne({_id: postId}, function(err){
        res.redirect(`../../feed`)
    })
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