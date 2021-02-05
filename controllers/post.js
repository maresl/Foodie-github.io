module.exports = {
    new: newPost
}

function newPost(req, res){
    res.render(`post/new`, {currentUser: req.user})
}