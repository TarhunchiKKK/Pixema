import { defaultMoviesFilters } from "@/constants";
import { setMoviesFilters } from "@/redux";
import { COUNTRIES, GENRES, IRootState, MoviesSearchOptions, SORT_ORDERS } from "@/types";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
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

    const handleSortOrderChange = (sortOrder: string) => {
        setFormState({ ...formState, sortOrder: sortOrder as SORT_ORDERS });
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, title: e.target.value });
    };

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value === defaultCountry ? undefined : (e.target.value as COUNTRIES);
        setFormState({ ...formState, country: value });
    };

    const handleYearFromChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, yearFrom: +e.target.value });
    };

    const handleYearToChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, yearTo: +e.target.value });
    };

    const handleRatingFromChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, ratingFrom: +e.target.value });
    };

    const handleRatingToChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, ratingTo: +e.target.value });
    };

    const handleGenresChange = (genres: string[]) => {
        setFormState({ ...formState, genres: genres as GENRES[] });
    };

    return [
        formState,
        handleSubmit,
        handleReset,
        {
            handleSortOrderChange,
            handleTitleChange,
            handleCountryChange,
            handleYearFromChange,
            handleYearToChange,
            handleRatingFromChange,
            handleRatingToChange,
            handleGenresChange,
        },
    ] as const;
}
