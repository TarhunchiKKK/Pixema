import { FC, MouseEvent } from "react";
import { IMovieCardProps } from "./props";
import { DefaultPoster } from "@/assets";
import { getGenresList } from "@/utils";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants";
import { IMovie } from "@/types";
import { useDispatch } from "react-redux";
import { toggleFavouriteMovie } from "@/redux";

export const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
    const dispatch = useDispatch();

    const location = useLocation();
    const allowFavouriteIcon = location.pathname === ROUTES.FAVOURITES;

    const handleUnfavourite = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(toggleFavouriteMovie(movie as IMovie));
        e.stopPropagation();
    };

    return (
        <div className="w-[272px] xs:w-[230px] sm:w-[272px] md:w-[208px] xl:w-[230px] 2xl:w-[266px]">
            <div className="relative w-full h-[365px] xs:h-[310px] sm:h-[365px] md:h-[279px] xl:h-[310px] 2xl:h-[357px] mb-5 rounded-[20px] overflow-hidden">
                <Link to={`${ROUTES.MOVIE}/${movie.id}`}>
                    <img
                        src={movie.poster?.url ?? DefaultPoster}
                        alt={movie.name}
                        className="w-full h-full object-center cursor-pointer"
                    />
                </Link>

                <span className="absolute top-5 left-5 text-center bg-tertiary-green text-white font-semibold text-base rounded-md w-[37px] py-0.5">
                    {movie.rating.imdb ?? "*"}
                </span>

                {allowFavouriteIcon && (
                    <button
                        onClick={handleUnfavourite}
                        className="absolute top-5 right-5 text-center bg-dark text-white font-semibold text-base rounded-md w-[37px] py-0.5"
                    >
                        <i className="fa-solid fa-bookmark text-primary"></i>
                    </button>
                )}
            </div>

            <h3 className="font-bold text-base mb-1">{movie.name ?? movie.alternativeName}</h3>

            <span className="font-medium text-base text-context-light">{getGenresList(movie)}</span>
        </div>
    );
};
