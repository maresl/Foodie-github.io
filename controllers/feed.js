const Post = require(`../models/Post`)
module.exports = {
    index
}

function index(req, res){
    Post.find({})
        .populate({path: 'comments', populate: {path: `owner`}})
        .populate(`owner`)
        .sort({createdAt: -1})
        .exec(function (err, allPosts){
            if(err) return err
            console.log(allPosts)
            res.render(`feed/feed`, {allPosts, currentUser: req.user})
        })
}