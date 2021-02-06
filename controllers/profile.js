const User = require(`../models/User`)
const Post = require(`../models/Post`)
module.exports = {
    index,
    update,
    addUpdates
}

function index(req, res){
    User.findById(req.params.id)
        .populate({ path: `posts`, populate: {path: `owner`}, options: {sort: {createdAt: -1}}})
        .exec(function(err, user){
            const context = {
                currentUser: req.user,
                userFoundById: user
            }
            res.render(`profile/profile`, context)
        })
}

function update(req, res){
    res.render(`profile/update`, {currentUser: req.user})
}

function addUpdates(req, res){
    User.findById(req.user._id, function(err, userProfile){
        userProfile.userName = req.body.userName
        userProfile.email = req.body.email
        userProfile.profilePicture = req.body.profilePicture
        userProfile.bio = req.body.bio
        userProfile.save()
    })
    res.redirect(`../profile/${req.user._id}`)
}