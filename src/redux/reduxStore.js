import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./content_reducer";
import thunkMiddleware from "redux-thunk"
import searchReducer from "./search_reducer";

let rootReducer = combineReducers({
    content: contentReducer,
    search: searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;