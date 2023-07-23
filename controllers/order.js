import {

    getOrdersUsecase,
    getOrderByIDUsecase,
    updateOrderUsecase,
    deleteOrderUsecase,
    addNewOrderUsecase,

} from '../usecases/order.js';

export const getOrders = async (req, res) => {

    try {

        const orders = await getOrdersUsecase();

        res.json({
            data : orders
        });

    } catch (err) { 

        res.status(500).json({
            error : err.message,
        });
    };
};

export const getOrderByID = async (req, res) => {

    try {
        const {id} = req.params;
        const order = await getOrderByIDUsecase(id);

        res.json({
            data : order
        });

    } catch(err) {

        res.statu(500).json({
            error : err.message,
        });
    };
};

export const addNewOrder = async (req, res) => {

    try {
        const newOrder = await addNewOrderUsecase(req.body);

        res.json({
            data : newOrder
        });

    } catch(err) {

        res.status(500).json({
            error : err.message,
        })
    }
}

export const updateOrder = async (req, res) => {

    try {
        const {id} = req.params;
        const result = await updateOrderUsecase(id, req.body);

        res.json({
            data : result,
        });

    } catch(err) {

        res.status(500).json({
            error : err.message,
        });
    };
};

export const deleteOrder = async (req, res) => {

    try {

        const {id} = req.params;

        const result = await deleteOrderUsecase(id);

        res.json({
            data : result,
        });

    } catch (err) {

        res.status(500).json({
            error : err.message,
        });
    };
};