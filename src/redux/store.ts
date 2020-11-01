import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = appReducer;

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;