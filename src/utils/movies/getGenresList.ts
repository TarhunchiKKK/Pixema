import { IMovie } from "@/types";

export function getGenresList(movie: IMovie) {
    return movie.genres
        .slice(0, 3)
        .map((genre) => genre.name)
        .join(" * ");
}
