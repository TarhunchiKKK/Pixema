import { MoviesSearchOptions, SORT_ORDERS } from "@/types";

export const defaultMoviesFilters: MoviesSearchOptions = {
    title: "",
    limit: 20,
    page: 1,
    sortOrder: SORT_ORDERS.RATING,
};
