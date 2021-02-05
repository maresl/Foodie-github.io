const User = require(`../models/User`)
module.exports = {
    index
}

function index(req, res){
    User.findById(req.params.id, function(err, userFoundById){
        console.log(userFoundById)
        res.render(`profile/profile`, {userFoundById, currentUser: req.user})
    })
}