import { IMoviesSearchOptions, SORT_ORDERS } from "@/types";

export const defaultMoviesFilters: IMoviesSearchOptions = {
    title: "",
    sortOrder: SORT_ORDERS.RATING,
};
