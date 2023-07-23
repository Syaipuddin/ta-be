import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    orderId : {
        required : true,
        type : Number
    },
    table : {
        required : true,
        type : Number
    },
    orders : [

        {
            order : String,
             qty : Number
        }

    ]
});

export const Order = mongoose.model('Order', orderSchema);