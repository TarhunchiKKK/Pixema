import { IMovie } from "@/types";

export function filterMovies(movies: IMovie[], title: string) {
    return movies.filter((movie) =>
        (movie.name ?? movie.alternativeName ?? "").toLowerCase().includes(title.toLowerCase()),
    );
}
