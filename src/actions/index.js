import * as type from "../constant/index"
export const choseMenu = (menu) => {
    return {
        menu: menu,
        type: type.CHOSEMENU,
    };
};