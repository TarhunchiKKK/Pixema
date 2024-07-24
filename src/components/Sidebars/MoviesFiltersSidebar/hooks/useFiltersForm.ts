import { defaultMoviesFilters } from "@/constants";
import { setMoviesFilters, toggleMoviesSidebar } from "@/redux";
import { COUNTRIES, GENRES, IRootState, SORT_ORDERS } from "@/types";
import { ChangeEvent, FormEvent, MouseEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultCountry } from "../constants";

export function useFiltersForm() {
    const dispatch = useDispatch();
    const { filters } = useSelector((state: IRootState) => state.movies.movies);

    const [formState, setFormState] = useState({
        ...filters,
        yearFrom: filters.yearFrom ? String(filters.yearFrom) : "",
        yearTo: filters.yearTo ? String(filters.yearTo) : "",
        ratingFrom: filters.ratingFrom ? String(filters.ratingFrom) : "",
        ratingTo: filters.ratingTo ? String(filters.ratingTo) : "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newFilters = {
            ...formState,
            yearFrom: formState.yearFrom === "" ? undefined : +formState.yearFrom,
            yearTo: formState.yearTo === "" ? undefined : +formState.yearTo,
            ratingFrom: formState.ratingFrom === "" ? undefined : +formState.ratingFrom,
            ratingTo: formState.ratingTo === "" ? undefined : +formState.ratingTo,
        };
        dispatch(setMoviesFilters(newFilters));
        dispatch(toggleMoviesSidebar());
    };

    const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(
            setMoviesFilters({
                ...defaultMoviesFilters,
                yearFrom: undefined,
                yearTo: undefined,
                ratingFrom: undefined,
                ratingTo: undefined,
            }),
        );

        setFormState({
            ...defaultMoviesFilters,
            yearFrom: "",
            yearTo: "",
            ratingFrom: "",
            ratingTo: "",
        });
    };

    const changeHandlers = useMemo(() => {
        return {
            handleSortOrderChange: (sortOrder: string) => {
                setFormState((prev) => ({ ...prev, sortOrder: sortOrder as SORT_ORDERS }));
            },

            handleCountryChange: (e: ChangeEvent<HTMLSelectElement>) => {
                const value =
                    e.target.value === defaultCountry ? undefined : (e.target.value as COUNTRIES);
                setFormState((prev) => ({ ...prev, country: value }));
            },

            handleYearFromChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value
                    .split("")
                    .filter((num) => "0" <= num && num <= "9")
                    .join("");
                setFormState((prev) => ({ ...prev, yearFrom: value }));
            },

            handleYearToChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value
                    .split("")
                    .filter((num) => "0" <= num && num <= "9")
                    .join("");
                setFormState((prev) => ({ ...prev, yearTo: value }));
            },

            handleRatingFromChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value
                    .split("")
                    .filter((num) => ("0" <= num && num <= "9") || num === ".")
                    .join("");
                setFormState((prev) => ({ ...prev, ratingFrom: value }));
            },

            handleRatingToChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value
                    .split("")
                    .filter((num) => ("0" <= num && num <= "9") || num === ".")
                    .join("");
                setFormState((prev) => ({ ...prev, ratingTo: value }));
            },

            handleGenresChange: (genres: string[]) => {
                setFormState((prev) => ({ ...prev, genres: genres as GENRES[] }));
            },
        };
    }, []);

    return [formState, handleSubmit, handleReset, changeHandlers] as const;
}
