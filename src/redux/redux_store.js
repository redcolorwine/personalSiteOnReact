import { combineReducers, createStore } from "redux";
import workReducer from "./worksReducer";
// Создание Store
//в приложении пока используется один редьюсер для страницы с работами
let reducers=combineReducers({
    workPage:workReducer
})

let store=createStore(reducers);

export default store;