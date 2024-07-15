import { IMoviesState } from "./movies";
import { IMoviesFiltersState } from "./moviesFilters";

export interface IRootState {
    movies: IMoviesState;
    moviesFilters: IMoviesFiltersState;
}
