import {

    getOrdersRepo,
    getOrderByIDRepo,
    addNewOrderRepo,
    updateOrderRepo,
    deleteOrderRepo
} from '../repo/order/order.js';

export const getOrdersUsecase = () => {

    return getOrdersRepo();

}

export const getOrderByIDUsecase = (id) => {

    return getOrderByIDRepo(id);

};

export const addNewOrderUsecase = (body) => {

    let orderValidated = true;

    body.orders.forEach( order => {
        if ( !(order.menuId && order.qty) ) {
            console.log(order.menuId & order.qty);
            orderValidated = false;
        }
    });

    if( !(orderValidated && body.table) ) {
        throw new Error(`Body tidak lengkap`);
    };

    return addNewOrderRepo(body);

};

export const updateOrderUsecase = (id, body) => {

    if(!body) {
        throw new Error(`Body tidak lengkap`);
    }

    return updateOrderRepo(id, body);
}

export const deleteOrderUsecase = (id) => {

    if(!id) {
        throw new Error(`Mohon masukkan Id yang valid`);
    }

    return deleteOrderRepo(id);
}