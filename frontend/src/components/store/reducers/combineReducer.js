import {userLoginReducer} from "./userLoginReducer";
import {combineReducers} from "redux";


export const reducer = combineReducers({ post: userLoginReducer});