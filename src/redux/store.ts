import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { moviesFiltersReducer, moviesReducer, uiReducer } from "./reducers";
import { moviesWatcher, userWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    movies: moviesReducer,
    moviesFilters: moviesFiltersReducer,
    ui: uiReducer,
});

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(moviesWatcher);
sagaMiddleware.run(userWatcher);
