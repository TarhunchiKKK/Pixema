import { MoviesGrid, ShowMoreButton } from "@/components";
import { fetchTrends, setTrendsPage } from "@/redux";
import { IRootState } from "@/types";
import { filterMovies } from "@/utils";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TrendsPage: FC = () => {
    const dispatch = useDispatch();

    const { data: movies, paginationOptions } = useSelector(
        (state: IRootState) => state.movies.trends,
    );

    const { search, loadMovies } = useSelector((state: IRootState) => state.movies);

    const handleShowMore = () => {
        dispatch(setTrendsPage(paginationOptions.page + 1));
    };

    useEffect(() => {
        dispatch(fetchTrends(paginationOptions));
    }, [dispatch, paginationOptions]);

    return (
        <>
            <MoviesGrid movies={filterMovies(movies, search)} />

            <div className="mt-12 md:mt-14 2xl:mt-16">
                <ShowMoreButton isLoading={loadMovies} onClick={handleShowMore} />
            </div>
        </>
    );
};
