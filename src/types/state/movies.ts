import { IMovie } from "../entities";
import { IMoviesSearchOptions } from "../service";

export interface IMoviesState {
    movies: {
        data: IMovie[];
        paginationData: {
            page: number;
            limit: number;
        };
        filters: IMoviesSearchOptions;
    };
    trends: {
        data: IMovie[];
        paginationData: {
            page: number;
            limit: number;
        };
    };
    currentMovie?: IMovie;
    favourites: IMovie[];
}
