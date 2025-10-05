import { combineReducers } from "redux";
import taskMenu from "./Menu/taskMenu";
import taskKhoaPhong from "./taskKhoaPhong";
import taskNam from "./taskNam";


const appReducer = combineReducers({
    taskMenu: taskMenu,
    taskKhoaPhong: taskKhoaPhong,
    taskNam: taskNam
});
export default appReducer;