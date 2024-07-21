import { IMovie, MoviesSearchOptions } from "@/types";
import {
    FETCH_MOVIES,
    FETCH_ONE_MOVIE,
    FETCH_TRENDS,
    SET_CURRENT_MOVIE,
    SET_MOVIES,
    SET_TRENDS,
    TOGGLE_FAVOURITE_MOVIE,
} from "../actionTypes";

export const setMovies = (movies: IMovie[]) => {
    return {
        type: SET_MOVIES,
        payload: movies,
    };
};

export const setCurrentMovie = (movie: IMovie) => {
    return {
        type: SET_CURRENT_MOVIE,
        payload: movie,
    };
};

export const fetchMovies = (options: MoviesSearchOptions) => {
    return {
        type: FETCH_MOVIES,
        payload: options,
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

export const setTrends = (movies: IMovie[]) => {
    return {
        type: SET_TRENDS,
        payload: movies,
    };
};

export const fetchTrends = () => {
    return {
        type: FETCH_TRENDS,
        payload: null,
    };
};
