import { Order } from "../../models/order.js";

export const addNewOrderRepo = async (body) => {

    try {

        const newOrder = new Order({
            orderId : Order.length + 1,
            orders : body.orders,
            table : body.table,
            qty : body.qty
        })

        const savedOrder = await newOrder.save();

        return savedOrder;

    } catch(err) {

        throw new Error(`Error adding Order = ${err.message}`);
    };
};

export const getOrdersRepo = async () => {

    try {

        const orders = await Order.find();

        return orders;
    } catch(err) {

        throw new Error(`Error getting Orders = ${err.message}`);
    };
};

export const getOrderByIDRepo = async (id) => {

    try {

        const order = await Order.findById(id).populate('orders.menuId');

        return order;

    } catch (err) {

        throw new Error(`Error getting Order = ${err.message}`);
    };
};

export const updateOrderRepo = async (id, body) => {

    try {

        const updateOrder = {
            menuId : body.menuId,
            table: body.table,
            qty : body.qty
        };

        const updated =  Order.findByIdAndUpdate(id, body);
        return updated;
    } catch(err) {

        throw new Error(`Error updating Order = ${err.message}`);
    };

};

export const deleteOrderRepo = async (id) => {

    try {

        const deleted = Order.findByIdAndDelete(id);

        return deleted;

    } catch(err) {

        throw new Error(`Error deleting Order = ${err.message}`);
    }
}