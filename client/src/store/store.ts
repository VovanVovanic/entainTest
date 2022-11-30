import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import {authReducer } from "./auth/reducer";
import { notesReducer } from "./notes/reducer";



const reducers = combineReducers({
  auth: authReducer,
  notes:notesReducer
});

type rootReducerType = typeof reducers;
export type RootStateType = ReturnType<rootReducerType>;
const middlewares = [thunk];


const store = createStore(reducers, applyMiddleware(...middlewares))
export default store;