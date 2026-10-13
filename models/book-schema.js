const { max } = require('date-fns');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required:[true,"Book title is required"],
            trim: true,
            max : [100,"Book length cant be more than a 100 characters"]
        },
        author:{
            type: String,
            required:[true,"Author name is required"],
            trim: true,
            max : [100,"Author length cant be more than a 100 characters"]
        },
        year:
        {
            type: Number,
            required:[true,"Published year is required"],
            trim: true,
            min : [1000,"Book length cant be more than a 100 characters"],
            max : [new Date().getFullYear(),"The date cant be in future"]
        },
        createdAt:
        {
            type: Date,
            default : Date.now
        }
    }
)
module.exports = mongoose.model("Book",bookSchema);