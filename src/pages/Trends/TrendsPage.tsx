import { MoviesGrid, ShowMoreButton } from "@/components";
import { fetchTrends } from "@/redux";
import { IRootState } from "@/types";
import { filterMovies } from "@/utils";
import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TrendsPage: FC = () => {
    const isInitialRender = useRef<boolean>(true);
    const dispatch = useDispatch();

    const { data: movies, paginationOptions } = useSelector(
        (state: IRootState) => state.movies.trends,
    );

    const { search, loadMovies } = useSelector((state: IRootState) => state.movies);

    const handleShowMore = () => {
        // dispatch(fetchMovies({
        //      ...paginationOptions,
        //      page: paginationOptions.page + 1
        // }));
        console.log("Fetch");
    };

    useEffect(() => {
        if (isInitialRender.current) {
            if (movies.length === 0) {
                // dispatch(fetchTrends(paginationOptions));
                console.log("Initial fetch");
            }
            isInitialRender.current = false;
        }
    }, [dispatch, movies, paginationOptions]);

    return (
        <>
            <MoviesGrid movies={filterMovies(movies, search)} />

            <div className="mt-12 md:mt-14 2xl:mt-16">
                <ShowMoreButton isLoading={loadMovies} onClick={handleShowMore} />
            </div>
        </>
    );
};
