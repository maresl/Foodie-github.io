const Post = require(`../models/Post`)

module.exports = {
    new: newPost,
    delete: deletePost,
    create, 
    edit,
    addEdit
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

function edit(req, res){
    Post.findById(req.params.id, function (err, currentPost){
        res.render(`post/edit`, {currentPost})
    })
    
}

function addEdit(req, res){
    Post.findById(req.params.id, function (err, currentPost){
        currentPost.restaurant = req.body.restaurant
        currentPost.picture = req.body.picture
        currentPost.caption = req.body.caption
        currentPost.save()
    })
    res.redirect(`/feed`)
}