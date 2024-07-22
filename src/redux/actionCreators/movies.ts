import { IMovie, IMoviesPaginationOptions, IMoviesSearchOptions } from "@/types";
import {
    FETCH_MOVIES,
    FETCH_ONE_MOVIE,
    FETCH_TRENDS,
    SET_CURRENT_MOVIE,
    APPEND_MOVIES,
    APPEND_TRENDS,
    TOGGLE_FAVOURITE_MOVIE,
    SET_MOVIES_SEARCH,
    SET_MOVIES_FILTERS,
} from "../actionTypes";

export const appendMovies = (movies: IMovie[]) => {
    return {
        type: APPEND_MOVIES,
        payload: movies,
    };
};

export const setCurrentMovie = (movie: IMovie) => {
    return {
        type: SET_CURRENT_MOVIE,
        payload: movie,
    };
};

export const fetchMovies = (
    searchOptions: IMoviesSearchOptions,
    paginationOptions: IMoviesPaginationOptions,
) => {
    return {
        type: FETCH_MOVIES,
        payload: {
            search: searchOptions,
            pagination: paginationOptions,
        },
    };
};

export const fetchOneMovie = (id: number) => {
    return {
        type: FETCH_ONE_MOVIE,
        payload: id,
    };
};

export const toggleFavouriteMovie = (movie: IMovie) => {
    return {
        type: TOGGLE_FAVOURITE_MOVIE,
        payload: movie,
    };
};

export const appendTrends = (movies: IMovie[]) => {
    return {
        type: APPEND_TRENDS,
        payload: movies,
    };
};

export const fetchTrends = (options: IMoviesPaginationOptions) => {
    return {
        type: FETCH_TRENDS,
        payload: options,
    };
};

export const setMoviesSearch = (search: string) => {
    return {
        type: SET_MOVIES_SEARCH,
        payload: search,
    };
};

export const setMoviesFilters = (options: IMoviesSearchOptions) => {
    return {
        type: SET_MOVIES_FILTERS,
        payload: options,
    };
};
