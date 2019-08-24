import { createStore, combineReducers } from "redux";
import {reducer as todReducer} from '../container/TodoList/store'

const reducers = combineReducers({
    todo: todReducer,
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
