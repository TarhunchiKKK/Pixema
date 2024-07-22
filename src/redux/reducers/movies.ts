import { IAction, IMovie, IMoviesSearchOptions, IMoviesState, SORT_ORDERS } from "@/types";
import {
    SET_CURRENT_MOVIE,
    APPEND_MOVIES,
    SET_MOVIES_FILTERS,
    APPEND_TRENDS,
    TOGGLE_FAVOURITE_MOVIE,
} from "../actionTypes";
import { FETCH_MOVIES_LIMIT } from "@/constants";

const initialState: IMoviesState = {
    movies: {
        data: [],
        paginationOptions: {
            page: 0,
            limit: FETCH_MOVIES_LIMIT,
        },
        filters: {
            sortOrder: SORT_ORDERS.RATING,
        },
    },
    trends: {
        data: [],
        paginationOptions: {
            page: 0,
            limit: FETCH_MOVIES_LIMIT,
        },
    },
    favourites: JSON.parse(
        localStorage.getItem(import.meta.env.VITE_FAVOURITES_LOCALSTORAGE_KEY as string) ?? "[]",
    ) as IMovie[],
    search: "",
};

export const moviesReducer = (state: IMoviesState = initialState, action: IAction) => {
    switch (action.type) {
        case APPEND_MOVIES: {
            return {
                ...state,
                movies: {
                    ...state.movies,
                    data: state.movies.data.concat(action.payload as IMovie[]),
                },
            };
        }
        case APPEND_TRENDS: {
            return {
                ...state,
                trends: {
                    ...state.trends,
                    data: state.trends.data.concat(action.payload as IMovie[]),
                },
            };
        }
        case SET_CURRENT_MOVIE: {
            return {
                ...state,
                currentMovie: action.payload as IMovie,
            };
        }
        case TOGGLE_FAVOURITE_MOVIE: {
            const movie = action.payload as IMovie;

            const isInFavourites = state.favourites.find((favourite) => favourite.id === movie.id);

            const nextState = isInFavourites
                ? state.favourites.filter((favourite) => favourite.id !== movie.id)
                : [...state.favourites, movie];

            localStorage.setItem(
                import.meta.env.VITE_FAVOURITES_LOCALSTORAGE_KEY as string,
                JSON.stringify(nextState),
            );

            return {
                ...state,
                favourites: nextState,
            };
        }
        case SET_MOVIES_FILTERS: {
            const areFiltersEqual =
                JSON.stringify(state.movies.filters) === JSON.stringify(action.payload);

            const moviesState = {
                movies: {
                    data: areFiltersEqual ? state.movies.data : [],
                },
                filters: {
                    ...(action.payload as IMoviesSearchOptions),
                },
            };

            return {
                ...state,
                movies: {
                    ...state.movies,
                    ...moviesState,
                },
            };
        }
        default:
            return state;
    }
};
