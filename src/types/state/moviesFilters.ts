import { COUNTRIES, GENRES, SORT_ORDERS } from "../enums";

export interface IMoviesFiltersState {
    title: string;
    country?: COUNTRIES;
    yearFrom?: number;
    yearTo?: number;
    ratingFrom?: number;
    ratingTo?: number;
    genres?: GENRES[];

    limit: number;
    page: number;

    sortOrder: SORT_ORDERS;
}
