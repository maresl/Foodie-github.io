const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema ({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: `User`
    },
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: `Restaurant`
    },
    picture: {
        type: String, 
        default: `https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg`

    },
    caption: String
})

module.exports = mongoose.model(`Post`, postSchema)