import { MoviesGrid } from "@/components";
import { IRootState } from "@/types";
import { filterMovies } from "@/utils";
import { FC } from "react";
import { useSelector } from "react-redux";

export const FavouritesPage: FC = () => {
    const { favourites, search } = useSelector((state: IRootState) => state.movies);

    return <MoviesGrid movies={filterMovies(favourites, search)} />;
};
