import { MoviesFiltersSidebar, MoviesGrid, ShowMoreButton } from "@/components";
import { fetchMovies } from "@/redux";
import { IRootState } from "@/types";
import { filterMovies } from "@/utils";
import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const HomePage: FC = () => {
    const isInitialRender = useRef<boolean>(true);
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
        // dispatch(
        //     fetchMovies(filters, {
        //         ...paginationOptions,
        //         page: paginationOptions.page + 1,
        //     }),
        // );
        console.log("Fetch");
    };

    useEffect(() => {
        if (isInitialRender.current) {
            if (movies.length === 0) {
                // dispatch(fetchMovies(filters, paginationOptions));
                console.log("Initial fetch");
            }
            isInitialRender.current = false;
        }
    }, [dispatch, movies, paginationOptions, filters]);

    return (
        <>
            {movies && <MoviesGrid movies={filterMovies(movies, search)} />}

            <div className="mt-12 md:mt-14 2xl:mt-16">
                <ShowMoreButton isLoading={loadMovies} onClick={handleShowMore} />
            </div>

            {isFiltersSidebarVisible && <MoviesFiltersSidebar />}
        </>
    );
};
