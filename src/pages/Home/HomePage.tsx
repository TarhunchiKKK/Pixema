import { MoviesFiltersSidebar, MoviesGrid, ShowMoreButton } from "@/components";
import { fetchMovies, setMoviesPage } from "@/redux";
import { IRootState } from "@/types";
import { filterMovies } from "@/utils";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const HomePage: FC = () => {
    const dispatch = useDispatch();

    const {
        data: movies,
        filters,
        paginationOptions,
    } = useSelector((state: IRootState) => state.movies.movies);

    const { search, loadMovies } = useSelector((state: IRootState) => state.movies);

    const isFiltersSidebarVisible = useSelector(
        (state: IRootState) => state.ui.isMoviesSidebarOpen,
    );

    const handleShowMore = () => {
        dispatch(setMoviesPage(paginationOptions.page + 1));
    };

    useEffect(() => {
        dispatch(fetchMovies(filters, paginationOptions));
    }, [filters, paginationOptions, dispatch]);

    return (
        <>
            <MoviesGrid movies={filterMovies(movies, search)} />

            <div className="mt-12 md:mt-14 2xl:mt-16">
                <ShowMoreButton isLoading={loadMovies} onClick={handleShowMore} />
            </div>

            {isFiltersSidebarVisible && <MoviesFiltersSidebar />}
        </>
    );
};
