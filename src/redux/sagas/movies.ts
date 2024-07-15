/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IAction, IMovie, ISearchMoviesResponse, MoviesSearchOptions } from "@/types";
import { constructQueryHeaders, constructQueryUrl } from "../helpers";
import { setMovies } from "../actionCreators";
import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_MOVIES, FETCH_ONE_MOVIE } from "../actionTypes";

function* fetchMoviesWorker(action: IAction<MoviesSearchOptions>) {
    const options = action.payload;
    const response: Response = yield fetch(constructQueryUrl(options), {
        headers: constructQueryHeaders(),
    });

    const result: ISearchMoviesResponse = yield response.json();

    yield setMovies(result.docs);
}

function* fetchOneMovieWorker(action: IAction<number>) {
    const movieId = action.payload;
    const response: Response = yield fetch(constructQueryUrl(movieId), {
        headers: constructQueryHeaders(),
    });

    const result: IMovie = yield response.json();

    yield setMovies([result]);
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
    yield takeEvery(FETCH_ONE_MOVIE, fetchOneMovieWorker);
}
