import { Menu } from "../../models/menu";

export const addMenuRepo = async (body) => {

    try {

        const newMenu = new Menu({
            category : body.category,
            name : body.name,
            price : body.price,
            quantity : body.quantity
        });

        const savedMenu = await newMenu.save();
        return savedMenu;

    } catch (err) {

        throw new Error(`Error Adding Menu ${err.mesage}`);

    };
};

export const getMenusRepo = async () => {

    try {

        const menus = await Menu.find();

        return menus;
        
    } catch (err) {

        throw new Error(`Error getting menus = ${err.message}`);

    };
};

export const getMenuByIDRepo = async (id) => {

    try {

        const menu = await Menu.findById(id);

        return menu;

    } catch (err) {

        throw new Error(`Error Getting menu = ${err.message}`);
    };

};

export const getMenuByCategoryRepo = async (category) => {

    try {

        const menu = await Menu.find(category);

        return menu;

    } catch(err) {

        throw new Error(`Error getting Menu = ${err.mesage}`);
    }
}

export const updateMenuRepo = async (id, body) => {

    try {

        const updateMenu = {
            category : body.category,
            name : body.name,
            price : body.price,
            quantity : body.quantity
        };

        const updated = await Menu.findByIdAndUpdate(id, updateMenu);
        return updated;

    } catch (err) {

        throw new Error(`Error Updating Menu = ${err.messagw}`);
    };
}

export const deleteMenuRepo = async (id) => {

    try {

        const deleted = await Menu.findByIdAndDelete(id);

        return deleted;
    } catch (err) {

        throw new Error(`Error deleting Menu = ${err.message}`);
    };
};