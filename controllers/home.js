module.exports = {
    home,
    register
}


function home(req, res){
    res.render(`home/home`)
}

function register(req, res){
    res.render(`home/register`)
}