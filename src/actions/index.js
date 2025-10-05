import * as type from "../constant/index"
export const choseMenu = (menu) => {
    return {
        menu: menu,
        type: type.CHOSEMENU,
    };
};
export const setKhoaPhong = (khoaPhongs) => {
    return {
        khoaPhongs: khoaPhongs,
        type: type.SETKHOAPHONG
    }
}
export const setNam = (nams) => {
    return {
        nams: nams,
        type: type.SETNAM
    }
}
