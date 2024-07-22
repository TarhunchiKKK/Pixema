/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { put, takeEvery } from "redux-saga/effects";
import { constructMoviesQueryUrl, constructTrendsQueryUrl } from "../utils";
import { appendMovies, appendTrends, setCurrentMovie, setMoviesFilters } from "../actionCreators";
import { FETCH_MOVIES, FETCH_ONE_MOVIE, FETCH_TRENDS } from "../actionTypes";
import {
    IAction,
    IMovie,
    ISearchMoviesResponse,
    IMoviesSearchOptions,
    IMoviesPaginationOptions,
} from "@/types";

function* fetchMoviesWorker(
    action: IAction<{ search: IMoviesSearchOptions; pagination: IMoviesPaginationOptions }>,
) {
    const { search, pagination } = action.payload;

    const response: Response = yield fetch(constructMoviesQueryUrl({ ...search, ...pagination }), {
        method: "GET",
        headers: {
            "X-API-KEY": import.meta.env.VITE_MOVIES_API_TOKEN as string,
        },
    });

    const result: ISearchMoviesResponse = yield response.json();

    yield put(setMoviesFilters(search));
    yield put(appendMovies(result.docs));
}

function* fetchTrendsWorker(action: IAction<IMoviesPaginationOptions>) {
    const searchOptions = action.payload;

    const response: Response = yield fetch(constructTrendsQueryUrl(searchOptions), {
        headers: {
            "X-API-KEY": import.meta.env.VITE_MOVIES_API_TOKEN as string,
        },
    });

    const result: ISearchMoviesResponse = yield response.json();

    yield put(appendTrends(result.docs));
}

function* fetchOneMovieWorker(action: IAction<number>) {
    const movieId = action.payload;

    const url = import.meta.env.VITE_MOVIES_API_URL as string;

    const response: Response = yield fetch(`${url}/movie/${movieId}`, {
        headers: {
            "X-API-KEY": import.meta.env.VITE_MOVIES_API_TOKEN as string,
        },
    });

    const movie: IMovie = yield response.json();

    yield put(setCurrentMovie(movie));
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
    yield takeEvery(FETCH_TRENDS, fetchTrendsWorker);
    yield takeEvery(FETCH_ONE_MOVIE, fetchOneMovieWorker);
}
