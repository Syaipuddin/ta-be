import express from "express";
const router = express.router();

export const appRouter = () => {

    // MENU ROUTES
    router.get('/menus', getMenus);
    router.get('/menu/:id', getMenuByID);
    router.get('/menu/:category', getMenusByCategory);

    router.post('/menu/add', addMenu);
    router.patch('/menu/update/:id', updateMenu);

    // ORDER ROUTES
    router.get('/orders', getOrders);
    router.get('/order/:id', getOrderByID);

    router.post('/order/add', addOrder);
    router.post('/order/update/:id', updateOrder);
}