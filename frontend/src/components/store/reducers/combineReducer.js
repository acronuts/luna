import {userLoginReducer} from "./userLoginReducer";
import {combineReducers} from "redux";
import {restaurantReducer} from "./restaurantReducer";


export const reducer = combineReducers({ post: userLoginReducer, restaurantReducer});