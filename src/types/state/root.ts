import { IMoviesState } from "./movies";
import { IMoviesFiltersState } from "./moviesFilters";
import { IUIState } from "./ui";
import { IUserState } from "./user";

export interface IRootState {
    movies: IMoviesState;
    moviesFilters: IMoviesFiltersState;
    ui: IUIState;
    user: IUserState;
}
