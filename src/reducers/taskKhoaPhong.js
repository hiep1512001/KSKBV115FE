
import * as type from '../constant/index'
var defaultState = []
const taskKhoaPhong = (state = defaultState, action) => {
    switch (action.type) {
        case type.SETKHOAPHONG:
            return action.khoaPhongs
        default:
            return state;
    }
};
export default taskKhoaPhong;