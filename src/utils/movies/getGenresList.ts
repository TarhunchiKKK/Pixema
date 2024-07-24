import { IMovie } from "@/types";

export function getGenresList(movie: Pick<IMovie, "genres">) {
    if (!movie.genres) {
        return "";
    }

    return movie.genres
        .slice(0, 3)
        .map((genre) => genre.name)
        .join(" * ");
}
