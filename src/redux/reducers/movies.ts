import { IAction, IMovie, IMoviesSearchOptions, IMoviesState, SORT_ORDERS } from "@/types";
import {
    SET_CURRENT_MOVIE,
    APPEND_MOVIES,
    SET_MOVIES_FILTERS,
    APPEND_TRENDS,
    TOGGLE_FAVOURITE_MOVIE,
    SET_MOVIELS_LOADING,
    SET_MOVIES_PAGE,
    SET_TRENDS_PAGE,
} from "../actionTypes";
import { FETCH_MOVIES_LIMIT } from "@/constants";

const initialState: IMoviesState = {
    movies: {
        data: [],
        paginationOptions: {
            page: 1,
            limit: FETCH_MOVIES_LIMIT,
        },
        filters: {
            sortOrder: SORT_ORDERS.RATING,
        },
    },
    trends: {
        data: [],
        paginationOptions: {
            page: 1,
            limit: FETCH_MOVIES_LIMIT,
        },
    },
    loadMovies: false,
    favourites: JSON.parse(
        localStorage.getItem(import.meta.env.VITE_FAVOURITES_LOCALSTORAGE_KEY as string) ?? "[]",
    ) as IMovie[],
    search: "",
};

export const moviesReducer = (
    state: IMoviesState = initialState,
    action: IAction,
): IMoviesState => {
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
        case SET_MOVIES_PAGE: {
            return {
                ...state,
                movies: {
                    ...state.movies,
                    paginationOptions: {
                        ...state.movies.paginationOptions,
                        page: action.payload as number,
                    },
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
        case SET_TRENDS_PAGE: {
            return {
                ...state,
                trends: {
                    ...state.trends,
                    paginationOptions: {
                        ...state.trends.paginationOptions,
                        page: action.payload as number,
                    },
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
            return {
                ...state,
                movies: {
                    ...state.movies,
                    data: [],
                    filters: action.payload as IMoviesSearchOptions,
                    paginationOptions: {
                        ...state.movies.paginationOptions,
                        page: 1,
                    },
                },
            };
        }
        case SET_MOVIELS_LOADING: {
            return {
                ...state,
                loadMovies: action.payload as boolean,
            };
        }
        default:
            return state;
    }
};
