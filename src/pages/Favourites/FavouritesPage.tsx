import { MoviesGrid } from "@/components";
import { IRootState } from "@/types";
import { filterMovies } from "@/utils";
import { FC } from "react";
import { useSelector } from "react-redux";

export const FavouritesPage: FC = () => {
    const favourites = useSelector((state: IRootState) => state.movies.favourites);
    const filters = useSelector((state: IRootState) => state.moviesFilters);

    return <MoviesGrid movies={filterMovies(favourites, filters.title)} />;
};
