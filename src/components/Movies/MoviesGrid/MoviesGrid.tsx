import { FC } from "react";
import { IMoviesGridProps } from "./props";
import { MovieCard } from "../MovieCard";

export const MoviesGrid: FC<IMoviesGridProps> = ({ movies }) => {
    return (
        <div className="mx-auto grid grid-cols-1 justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-y-8 xs:justify-between">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
