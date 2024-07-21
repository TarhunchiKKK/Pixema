import { COUNTRIES, GENRES, SORT_ORDERS } from "@/types/enums";

export interface IMoviesSearchOptions {
    country?: COUNTRIES;
    yearFrom?: number;
    yearTo?: number;
    ratingFrom?: number;
    ratingTo?: number;
    genres?: GENRES[];
    sortOrder: SORT_ORDERS;
}
