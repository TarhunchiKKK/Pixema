import { IAction, IMovie, IMoviesSearchOptions, IMoviesState, SORT_ORDERS } from "@/types";
import {
    SET_CURRENT_MOVIE,
    SET_MOVIES,
    SET_MOVIES_FILTERS,
    SET_TRENDS,
    TOGGLE_FAVOURITE_MOVIE,
} from "../actionTypes";

const initialState: IMoviesState = {
    movies: {
        data: [],
        paginationData: {
            page: 0,
            limit: 20,
        },
        filters: {
            sortOrder: SORT_ORDERS.RATING,
        },
    },
    trends: {
        data: [],
        paginationData: {
            page: 0,
            limit: 20,
        },
    },
    favourites: JSON.parse(
        localStorage.getItem(import.meta.env.VITE_FAVOURITES_LOCALSTORAGE_KEY as string) ?? "[]",
    ) as IMovie[],
};

export const moviesReducer = (state: IMoviesState = initialState, action: IAction) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: {
                    ...state.movies,
                    data: state.movies.data.concat(action.payload as IMovie[]),
                },
            };
        }
        case SET_TRENDS: {
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
