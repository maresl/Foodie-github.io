const User = require(`../models/User`)
const Post = require(`../models/Post`)
module.exports = {
    index
}

function index(req, res){
    User.findById(req.params.id)
        .populate({ path: `posts`, options: {sort: {createdAt: -1}}})
        .exec(function(err, user){
            const context = {
                currentUser: req.user,
                userFoundById: user
            }
            res.render(`profile/profile`, context)
        })
}