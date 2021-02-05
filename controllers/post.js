const Post = require(`../models/Post`)
const User = require(`../models/User`)
module.exports = {
    new: newPost,
    create
}

function newPost(req, res){
    res.render(`post/new`, {currentUser: req.user})
}

function create(req, res){
    User.findById({_id: req.user._id}, function(err, foundUser){
        req.body.owner = foundUser
        console.log(req.body)
        Post.create(req.body, function(err, createdPost){
            createdPost.save()
            console.log(createdPost)
            foundUser.posts.push(createdPost)
            foundUser.save()
            console.log(foundUser)
        })
    })
    
    res.redirect(`../feed/feed`)
}