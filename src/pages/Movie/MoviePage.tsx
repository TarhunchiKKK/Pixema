import { getGenresList, useMediaQUery } from "@/utils";
import { FC, useEffect } from "react";
import { POSTER_REPLAACE_BREAKPOINT } from "./constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneMovie } from "@/redux";
import { IRootState } from "@/types";
import { Poster } from "./Poster";
import { MovieProperties } from "./MovieProperties";

export const MoviePage: FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state: IRootState) => state.movies.currentMovie);

    useEffect(() => {
        if (id) {
            dispatch(fetchOneMovie(+id));
        }
    });

    const isPosterSeparatly = useMediaQUery(POSTER_REPLAACE_BREAKPOINT);

    return (
        <>
            {movie && (
                <div className="flex justify-between items-start md:gap-8 lg:gap-[42pxs]">
                    {isPosterSeparatly && <Poster key="Poster" movie={movie} />}

                    <div>
                        <span className="font-medium text-base">{getGenresList(movie)}</span>
                        <h1 className="font-semibold text-[28px] leading-[42px] mb-5">
                            {movie.name}
                        </h1>

                        <div className="flex gap-5 mb-8 md:mb-10">
                            <span className="rounded-md py-0.5 px-2 text-white bg-tertiary-green">
                                {movie.rating.kp}
                            </span>

                            <span className="rounded-md py-0.5 px-2 text-white bg-graphite">
                                IMDb {movie.rating.kp}
                            </span>

                            {movie.movieLength && (
                                <span className="rounded-md py-0.5 px-2 text-white bg-graphite">
                                    {movie.movieLength} min
                                </span>
                            )}
                        </div>

                        {!isPosterSeparatly && <Poster key="Poster" movie={movie} />}

                        <p className="font-medium text-base my-8">{movie.description}</p>

                        <MovieProperties movie={movie} />

                        {/* <RecomendationsList movies={mockMovies} /> */}
                    </div>
                </div>
            )}
        </>
    );
};
