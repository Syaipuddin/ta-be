import express from "express";
const router = express.Router();

import {
    getMenus, getMenuByID, getMenusByCategory, addMenu, updateMenu, deleteMenu
} from '../controllers/menu.js';

import {
    getOrders, getOrderByID, addNewOrder, updateOrder, deleteOrder
} from '../controllers/order.js';

    // MENU ROUTES
    router.get('/menus', getMenus);
    router.get('/menu/:id', getMenuByID);
    router.get('/menu/category/:category', getMenusByCategory);

    router.post('/menu/add', addMenu);

    router.patch('/menu/update/:id', updateMenu);

    router.delete('/menu/delete/:id', deleteMenu);

    // ORDER ROUTES
    router.get('/orders', getOrders);
    router.get('/order/:id', getOrderByID);

    router.post('/order/add', addNewOrder);

    router.patch('/order/update/:id', updateOrder);

    router.delete('/order/delete/:id', deleteOrder);

    export default router;