import { IMoviesPaginationOptions, SORT_ORDERS } from "@/types";

export function constructTrendsQueryUrl(options: IMoviesPaginationOptions) {
    const url = import.meta.env.VITE_MOVIES_API_URL as string;
    return `${url}movie?type=movie&page=${options.page}&limit=${options.limit}&sortField=${SORT_ORDERS.RATING}&sortType=1`;
}
