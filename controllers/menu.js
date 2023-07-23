import {
    getMenusUsecase,
    getMenuByIDUsecase,
    getMenusByCategoryUsecase,
    addMenuUsecase,
    updateMenuUsecase,
    deleteMenuUsecase
} from '../usecases/menu.js';

export const addMenu = async (req, res) => {

    try {

        const result = await addMenuUsecase(req.body);

        res.status(201).json({
            data : result,
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        })
    }
}

export const getMenus = async (req, res) => {

    try {

        const menus = await getMenusUsecase();

        res.json({
            data : menus,
        });

    } catch(err) {

        res.status(500).json({
            err : err.message,
        });

    }


};

export const getMenuByID = async (req, res) => {

    try {

        const {id} = req.params;

        const menu = await getMenuByIDUsecase(id);
        
        res.json({
            data : menu,
        });

    } catch(err) {

        res.status(500).json({
            error : err.message
        });
    };


}

export const getMenusByCategory = async (req, res) => {

    try {

        const {category} = req.params;

        const menus = await getMenusByCategoryUsecase(category);

        res.json({
            data : menus
        });

    } catch(err) {

        res.status(500).json({
            error : err.message
        });

    };
};

export const updateMenu = async (req, res) => {

    try {

        const {id} = req.params;

        const result = await updateMenuUsecase(id, req.body);

        res.status(201).json({
            data : result,
        })

    } catch(err) {

        res.status(500).json({
            error : err.message,
        })
    };
};

export const deleteMenu = async (req, res) => {

    try {

        const {id} = req.params;

        const result = await deleteMenuUsecase(id);

        res.json({
            data : result,
        });
        
    } catch(err) {

        res.status(500).json({
            err : err.message,
        })
    }
}