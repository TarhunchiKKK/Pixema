import { COUNTRIES, GENRES, IAction, IMoviesFiltersState, SORT_ORDERS } from "@/types";
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

const initialState: IMoviesFiltersState = {
    title: "",
    limit: 20,
    page: 1,
    sortOrder: SORT_ORDERS.RATING,
};

export const moviesFiltersReducer = (
    state: IMoviesFiltersState = initialState,
    action: IAction,
) => {
    switch (action.type) {
        case SET_MOVIES_TITLE: {
            return {
                ...state,
                name: action.payload as string,
            };
        }
        case SET_MOVIES_COUNTRY: {
            return {
                ...state,
                country: action.payload as COUNTRIES,
            };
        }
        case SET_MOVIES_YEAR_FROM: {
            return {
                ...state,
                yearFrom: action.payload as number,
            };
        }
        case SET_MOVIES_YEAR_TO: {
            return {
                ...state,
                yearTo: action.payload as number,
            };
        }
        case SET_MOVIES_RATING_FROM: {
            return {
                ...state,
                ratingFrom: action.payload as number,
            };
        }
        case SET_MOVIES_RATING_TO: {
            return {
                ...state,
                ratingTo: action.payload as number,
            };
        }
        case SET_MOVIES_GENRES: {
            return {
                ...state,
                genres: action.payload as GENRES[],
            };
        }
        case SET_MOVIES_SORT_ORDER: {
            return {
                ...state,
                sortOrder: action.payload as SORT_ORDERS,
            };
        }
        case SET_MOVIES_LIMIT: {
            return {
                ...state,
                limit: action.payload as number,
            };
        }
        case SET_MOVIES_PAGE: {
            return {
                ...state,
                page: action.payload as number,
            };
        }
        case SET_MOVIES_FILTERS: {
            return {
                ...state,
                ...(action.payload as Partial<IMoviesFiltersState>),
            };
        }
        default:
            return state;
    }
};
