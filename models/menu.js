import mongoose from "mongoose";
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    category : {
        required : true,
        type : String
    },
    name : {
        required : true,
        type : String
    },
    price : {
        required : true,
        type : Number
    },
    quantity : {
        type : Number
    }
});

export const Menu = mongoose.model('Menu', menuSchema);