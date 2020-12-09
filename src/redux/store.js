import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    todoList: todoReducer
})

let store = createStore(reducers);

export default store;