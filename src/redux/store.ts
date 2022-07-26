import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import rootReducer from './root-reducer';



const middlewares = [thunk, logger];

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(...middlewares)
)