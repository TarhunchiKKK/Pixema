import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(null);

export const store = createStore(rootReducer, null, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run();
