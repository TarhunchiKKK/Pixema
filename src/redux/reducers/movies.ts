import { IAction, IMovie, IMoviesState } from "@/types";
import { SET_CURRENT_MOVIE, SET_MOVIES, TOGGLE_FAVOURITE_MOVIE } from "../actionTypes";

const initialState: IMoviesState = {
    movies: [],
    favourites: [],
};

export const moviesReducer = (state: IMoviesState = initialState, action: IAction) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.payload as IMovie[],
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
        default:
            return state;
    }
};
