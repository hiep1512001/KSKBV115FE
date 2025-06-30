
import * as type from '../../constant/index'
var defaultState = type.MENUTRANGCHU
const taskMenu = (state = defaultState, action) => {
    switch (action.type) {
        case type.CHOSEMENU:
            return action.menu
        default:
            return state;
    }
};
export default taskMenu;