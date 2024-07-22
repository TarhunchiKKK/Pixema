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
    SET_MOVIELS_LOADING,
    SET_MOVIES_PAGE,
    SET_TRENDS_PAGE,
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

export const setMoviesLoading = (isLoading: boolean) => {
    return {
        type: SET_MOVIELS_LOADING,
        payload: isLoading,
    };
};

export const setMoviesPage = (page: number) => {
    return {
        type: SET_MOVIES_PAGE,
        payload: page,
    };
};

export const setTrendsPage = (page: number) => {
    return {
        type: SET_TRENDS_PAGE,
        payload: page,
    };
};
