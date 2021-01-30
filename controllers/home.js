module.exports = {
    index,
    home,

}

function index(req, res){
    res.redirect(`/home`)
}

function home(req, res){
    res.render(`home/home`)
}