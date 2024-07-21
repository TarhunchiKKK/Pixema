import { IMovie } from "../entities";

export interface IMoviesState {
    movies: IMovie[];
    currentMovie?: IMovie;
    favourites: IMovie[];
}
