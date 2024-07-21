import { IMovie } from "../entities";

export interface IMoviesState {
    movies: IMovie[];
    currentMovie?: IMovie;
    trends: IMovie[];
    favourites: IMovie[];
}
