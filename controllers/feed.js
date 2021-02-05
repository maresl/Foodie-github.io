const User = require(`../models/index`).User
module.exports = {
    index
}

function index(req, res){
    res.render(`feed/feed`, {user: req.user})
}