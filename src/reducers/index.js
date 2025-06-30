import { combineReducers } from "redux";
import taskMenu from "./Menu/taskMenu";

const appReducer = combineReducers({
    taskMenu: taskMenu,
});
export default appReducer;