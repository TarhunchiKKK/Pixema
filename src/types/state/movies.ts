import { IMovie } from "../entities";
import { IMoviesPaginationOptions, IMoviesSearchOptions } from "../service";

export interface IMoviesState {
    movies: {
        data: IMovie[];
        paginationOptions: IMoviesPaginationOptions;
        filters: IMoviesSearchOptions;
    };
    trends: {
        data: IMovie[];
        paginationOptions: IMoviesPaginationOptions;
    };
    currentMovie?: IMovie;
    loadMovies: boolean;
    favourites: IMovie[];
    search: string;
}
