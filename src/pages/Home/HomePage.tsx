import { MoviesGrid } from "@/components";
import { mockMovies } from "@/mocks";
import { setMovies } from "@/redux";
import { IRootState } from "@/types";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const HomePage: FC = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: IRootState) => state.movies.movies);
    const filters = useSelector((state: IRootState) => state.moviesFilters);

    useEffect(() => {
        // dispatch(fetchMovies({ ...filters }));
        dispatch(setMovies(mockMovies));
    }, [filters, dispatch]);

    return <MoviesGrid movies={movies} />;
};
