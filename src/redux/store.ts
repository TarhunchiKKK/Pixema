import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { moviesFiltersReducer, moviesReducer } from "./reducers";
import { moviesWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    movies: moviesReducer,
    moviesFilters: moviesFiltersReducer,
});

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(moviesWatcher);
