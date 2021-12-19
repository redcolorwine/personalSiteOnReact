import { combineReducers, createStore } from "redux";
import workReducer from "./worksReducer";

let reducers=combineReducers({
    workPage:workReducer
})

let store=createStore(reducers);

export default store;