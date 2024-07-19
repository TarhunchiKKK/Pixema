import { defaultMoviesFilters } from "@/constants";
import { setMoviesFilters } from "@/redux";
import { COUNTRIES, GENRES, IRootState, MoviesSearchOptions, SORT_ORDERS } from "@/types";
import { ChangeEvent, FormEvent, MouseEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultCountry } from "../constants";

export function useFiltersForm() {
    const dispatch = useDispatch();
    const filters = useSelector((state: IRootState) => state.moviesFilters);
    const [formState, setFormState] = useState<MoviesSearchOptions>(filters);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setMoviesFilters(formState));
    };

    const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setFormState(defaultMoviesFilters);
    };

    const changeHandlers = useMemo(() => {
        return {
            handleSortOrderChange: (sortOrder: string) => {
                setFormState((prev) => ({ ...prev, sortOrder: sortOrder as SORT_ORDERS }));
            },

            handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({ ...prev, title: e.target.value }));
            },

            handleCountryChange: (e: ChangeEvent<HTMLSelectElement>) => {
                const value =
                    e.target.value === defaultCountry ? undefined : (e.target.value as COUNTRIES);
                setFormState((prev) => ({ ...prev, country: value }));
            },

            handleYearFromChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({ ...prev, yearFrom: +e.target.value }));
            },

            handleYearToChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({ ...prev, yearTo: +e.target.value }));
            },

            handleRatingFromChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({ ...prev, ratingFrom: +e.target.value }));
            },

            handleRatingToChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({ ...prev, ratingTo: +e.target.value }));
            },

            handleGenresChange: (genres: string[]) => {
                setFormState((prev) => ({ ...prev, genres: genres as GENRES[] }));
            },
        };
    }, []);

    return [formState, handleSubmit, handleReset, changeHandlers] as const;
}
