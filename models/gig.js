const mongoose = require("../database/mongoose");
const { Schema } = mongoose

const gigSchema = new Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    customer_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    title: {
        type: String,
        required: true,
    },
    delivery_date: {
        type: String,
        required: true,
    },
    style_name : {
        type: String,
    },
    style: {
        type : [String],
        default : null
    },
    notes : {
        type: String,
        default : null
    },
    price : {
        type: String,
    },
    is_done :{
        type : Boolean,
        default : false
    }
})

const gigModel = mongoose.model('gigModel', gigSchema)
module.exports = gigModel;