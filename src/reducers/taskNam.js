
import { Name } from 'ajv';
import * as type from '../constant/index'
var defaultState = []
const taskNam = (state = defaultState, action) => {
    switch (action.type) {
        case type.SETNAM:
            return action.nams
        default:
            return state;
    }
};
export default taskNam;