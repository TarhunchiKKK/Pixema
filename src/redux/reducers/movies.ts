import { IAction, IMovie, IMoviesState } from "@/types";
import { SET_CURRENT_MOVIE, SET_MOVIES } from "../actionTypes";

const initialState: IMoviesState = {
    movies: [],
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
        default:
            return state;
    }
};
