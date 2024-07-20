import { FC } from "react";
import { IMovieCardProps } from "./props";
import { DefaultPoster } from "@/assets";
import { getGenresList } from "@/utils";

export const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
    return (
        <div className="min-w-[272px] xs:min-w-[230px] sm:min-w-[272px] md:min-w-[208px] xl:min-w-[230px] 2xl:min-w-[266px]">
            <div className="relative w-full h-[365px] xs:h-[310px] sm:h-[365px] md:h-[279px] xl:h-[310px] 2xl:h-[357px] mb-5 rounded-[20px] overflow-hidden">
                <img
                    src={movie.poster?.url ?? DefaultPoster}
                    alt={movie.name}
                    className="w-full h-full object-center cursor-pointer"
                />

                <span className="absolute top-5 left-5 text-center bg-tertiary-green text-white font-semibold text-base rounded-md w-[37px] py-0.5">
                    {movie.rating.imdb ?? "*"}
                </span>
            </div>

            <h3 className="font-bold text-base mb-1">{movie.name ?? movie.alternativeName}</h3>

            <span className="font-medium text-base text-context-light">{getGenresList(movie)}</span>
        </div>
    );
};
