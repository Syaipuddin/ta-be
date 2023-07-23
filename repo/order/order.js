import { Order } from "../../models/order";

export const addNewOrderRepo = async (body) => {

    try {

        const newOrder = new Order({
            orderId : Order.length + 1,
            table : body.table,
            orders : body.orders
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

        const order = await Order.findById(id);

        return order;

    } catch (err) {

        throw new Error(`Error getting Order = ${err.message}`);
    };
};

export const updateOrderRepo = async (id, body) => {

    try {

        const updateOrder = {
            table: body.table,
            orders : body.orders
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