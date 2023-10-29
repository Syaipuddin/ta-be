import {

    getMenusRepo,
    getMenuByIDRepo,
    getMenusByCategoryRepo,
    addMenuRepo,
    updateMenuRepo,
    deleteMenuRepo

} from '../repo/menus/menu.js';

export const getMenusUsecase = async () => {

        const menus = await getMenusRepo();
        return menus;

};

export const getMenuByIDUsecase = (id) => {

    if(!id){
        return null;
    }

    return getMenuByIDRepo(id);

}

export const getMenusByCategoryUsecase = (category) => {

    if(!category) {
        return null;
    }

    return getMenusByCategoryRepo(category);

}

export const addMenuUsecase = (body) => {

    if(!body.category || !body.name || !body.price || !body.quantity) {
        throw new Error(`Body tidak Lengkap!`);
    }

    return addMenuRepo(body);
};

export const updateMenuUsecase = (id, body) => {

    if(!body){
        throw new Error(`Update body tidak lengkap!`)
    };

    return updateMenuRepo(id, body);
}

export const deleteMenuUsecase = (id) => {

    return deleteMenuRepo(id);

}