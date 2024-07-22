import { IMoviesState } from "./movies";
import { IUIState } from "./ui";
import { IUserState } from "./user";

export interface IRootState {
    movies: IMoviesState;
    ui: IUIState;
    user: IUserState;
}
