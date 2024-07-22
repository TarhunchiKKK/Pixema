import { IMoviesPaginationOptions, IMoviesSearchOptions } from "@/types";

export function constructMoviesQueryUrl(options: IMoviesSearchOptions & IMoviesPaginationOptions) {
    let url = import.meta.env.VITE_MOVIES_API_URL as string;

    // pagination
    url += `movie?type=movie&page=${options.page}&limit=${options.limit}&sortField=${options.sortOrder}&sortType=1`;

    // country
    if (options.country) {
        url += `&countries.name=${options.country}`;
    }

    // years
    if (options.yearFrom) {
        url += `&releaseYears.start&=${options.yearFrom}`;
    }
    if (options.yearTo) {
        url += `&releaseYears.end&=${options.yearTo}`;
    }

    // rating
    if (options.ratingFrom && options.ratingTo) {
        url += `&rating.kp=${options.ratingFrom}-${options.ratingTo}`;
    } else if (options.ratingFrom) {
        url += `&rating.kp=${options.ratingFrom}-10`;
    } else if (options.ratingTo) {
        url += `&rating.kp=6-${options.ratingTo}`;
    }

    // genres
    if (options.genres && options.genres.length > 0) {
        url += options.genres.map((genre) => `&genres.name=+${genre}`).join("");
    }

    return url;
}
