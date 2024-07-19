/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IAction, IMovie, ISearchMoviesResponse, MoviesSearchOptions } from "@/types";
import { constructQueryHeaders, constructQueryUrl } from "../utils";
import { setCurrentMovie, setMovies } from "../actionCreators";
import { FETCH_MOVIES, FETCH_ONE_MOVIE } from "../actionTypes";
import { put, takeEvery } from "redux-saga/effects";

function* fetchMoviesWorker(action: IAction<MoviesSearchOptions>) {
    const options = action.payload;
    const response: Response = yield fetch(constructQueryUrl(options), {
        method: "GET",
        headers: {
            "X-API-KEY": import.meta.env.VITE_MOVIES_API_TOKEN as string,
        },
    });

    const result: ISearchMoviesResponse = yield response.json();

    yield put(setMovies(result.docs));
}

function* fetchOneMovieWorker(action: IAction<number>) {
    const movieId = action.payload;
    const response: Response = yield fetch(constructQueryUrl(movieId), {
        headers: constructQueryHeaders(),
    });

    const movie: IMovie = yield response.json();

    yield put(setCurrentMovie(movie));
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
    yield takeEvery(FETCH_ONE_MOVIE, fetchOneMovieWorker);
}
