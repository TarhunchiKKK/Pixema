import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { moviesReducer, uiReducer, userReducer } from "./reducers";
import { authWatcher, moviesWatcher, userWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    movies: moviesReducer,
    ui: uiReducer,
    user: userReducer,
});

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(moviesWatcher);
sagaMiddleware.run(userWatcher);
sagaMiddleware.run(authWatcher);
