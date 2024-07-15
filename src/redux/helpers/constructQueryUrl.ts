import { MoviesSearchOptions } from "@/types";

export function constructQueryUrl(parameters: number | MoviesSearchOptions) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let url: string = import.meta.env.VITE_MOVIES_API_URL;

    if (typeof parameters === "number") {
        return `${url}/movie/${parameters}`;
    }

    // pagination
    url += `?page=${parameters.page}&limit=${parameters.limit}&sortField=${parameters.sortOrder}&sortType=1`;

    // country
    if (parameters.country) {
        url += `&countries.name=${parameters.country}`;
    }

    // years
    if (parameters.yearFrom) {
        url += `&releaseYears.start&=${parameters.yearFrom}`;
    }
    if (parameters.yearTo) {
        url += `&releaseYears.end&=${parameters.yearTo}`;
    }

    // rating
    if (parameters.ratingFrom && parameters.ratingTo) {
        url += `&rating.kp=${parameters.ratingFrom}-${parameters.ratingTo}`;
    } else if (parameters.ratingFrom) {
        url += `&rating.kp=${parameters.ratingFrom}-10`;
    } else if (parameters.ratingTo) {
        url += `&rating.kp=6-${parameters.ratingTo}`;
    }

    // genres
    if (parameters.genres && parameters.genres.length > 0) {
        url += parameters.genres.map((genre) => `&genres.name=+${genre}`).join("");
    }

    return url;
}
