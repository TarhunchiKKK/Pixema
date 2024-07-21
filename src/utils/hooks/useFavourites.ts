import { IMovie } from "@/types";
import { useState } from "react";

export function useFavourites() {
    const [favourites, setFavourites] = useState<IMovie[]>(() => {
        const movies = localStorage.getItem(
            import.meta.env.VITE_FAVOURITES_LOCALSTORAGE_KEY as string,
        );

        if (movies !== null) {
            return JSON.parse(movies) as IMovie[];
        }

        return [];
    });

    const toggleFavourite = (movie: IMovie) => {
        const isInFavourites = favourites.find((favourite) => favourite.id === movie.id);

        const nextState = isInFavourites
            ? favourites.filter((favourite) => favourite.id !== movie.id)
            : [...favourites, movie];

        localStorage.setItem(
            import.meta.env.VITE_FAVOURITES_LOCALSTORAGE_KEY as string,
            JSON.stringify(nextState),
        );

        setFavourites(nextState);
    };

    return [favourites, toggleFavourite] as const;
}
