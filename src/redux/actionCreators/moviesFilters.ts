import { COUNTRIES, GENRES, IMoviesFiltersState, SORT_ORDERS } from "@/types";
import {
    SET_MOVIES_COUNTRY,
    SET_MOVIES_FILTERS,
    SET_MOVIES_GENRES,
    SET_MOVIES_LIMIT,
    SET_MOVIES_PAGE,
    SET_MOVIES_RATING_FROM,
    SET_MOVIES_RATING_TO,
    SET_MOVIES_SORT_ORDER,
    SET_MOVIES_TITLE,
    SET_MOVIES_YEAR_FROM,
    SET_MOVIES_YEAR_TO,
} from "../actionTypes";

export const setMoviesTitle = (title: string) => {
    return {
        type: SET_MOVIES_TITLE,
        payload: title,
    };
};

export const setMoviesCountry = (country: COUNTRIES) => {
    return {
        type: SET_MOVIES_COUNTRY,
        payload: country,
    };
};

export const setMoviesYearFrom = (year: number) => {
    return {
        type: SET_MOVIES_YEAR_FROM,
        payload: year,
    };
};

export const setMoviesYearTo = (year: number) => {
    return {
        type: SET_MOVIES_YEAR_TO,
        payload: year,
    };
};

export const setMoviesRatingFrom = (rating: number) => {
    return {
        type: SET_MOVIES_RATING_FROM,
        payload: rating,
    };
};

export const setMoviesRatingTo = (rating: number) => {
    return {
        type: SET_MOVIES_RATING_TO,
        payload: rating,
    };
};

export const setMoviesGenres = (genres: GENRES[]) => {
    return {
        type: SET_MOVIES_GENRES,
        payload: genres,
    };
};

export const setMoviesSortOrder = (sortOrder: SORT_ORDERS[]) => {
    return {
        type: SET_MOVIES_SORT_ORDER,
        payload: sortOrder,
    };
};

export const setMoviesLimit = (limit: number) => {
    return {
        type: SET_MOVIES_LIMIT,
        payload: limit,
    };
};

export const setMoviesPage = (page: number) => {
    return {
        type: SET_MOVIES_PAGE,
        payload: page,
    };
};

export const setMoviesFilters = (filters: Partial<IMoviesFiltersState>) => {
    return {
        type: SET_MOVIES_FILTERS,
        payload: filters,
    };
};
