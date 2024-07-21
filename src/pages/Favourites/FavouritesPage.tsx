import { MoviesGrid } from "@/components";
import { IRootState } from "@/types";
import { FC } from "react";
import { useSelector } from "react-redux";

export const FavouritesPage: FC = () => {
    const favourites = useSelector((state: IRootState) => state.movies.favourites);

    return <MoviesGrid movies={favourites} />;
};
