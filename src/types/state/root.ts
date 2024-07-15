import { IMoviesState } from "./movies";
import { IMoviesFiltersState } from "./moviesFilters";
import { IUIState } from "./ui";

export interface IRootState {
    movies: IMoviesState;
    moviesFilters: IMoviesFiltersState;
    ui: IUIState;
}
