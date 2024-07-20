import { IMovie } from "@/types";

export function getGenresList(movie: Pick<IMovie, "genres">) {
    return movie.genres
        .slice(0, 3)
        .map((genre) => genre.name)
        .join(" * ");
}
