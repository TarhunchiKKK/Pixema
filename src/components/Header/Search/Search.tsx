import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setMoviesSearch, toggleMoviesSidebar } from "@/redux";
import { SortIcon } from "@/assets";
import { useLocation } from "react-router-dom";
import { allowFiltersPages } from "../constans";

export const Search: FC = () => {
    const [title, setTitle] = useState<string>("");
    const dispatch = useDispatch();

    const location = useLocation();
    const allowFiltersSidebar = allowFiltersPages.includes(location.pathname);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setMoviesSearch(title));
    };

    const handleOpenSidear = () => {
        if (allowFiltersSidebar) {
            dispatch(toggleMoviesSidebar());
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full md:w-auto md:grow order-2 md:order-none  mt-8 md:mt-0 md:ml-[84px] md:mr-8 2xl:ml-0"
        >
            <input
                type="text"
                className="px-5 py-4 rounded-[10px] bg-white w-full dark:bg-graphite outline-none border-2 border-context-light dark:border-transparent dark:focus:border-primary"
                placeholder="Search"
                value={title}
                onChange={handleChange}
            />

            <img
                src={SortIcon}
                alt="Sort"
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleOpenSidear}
                data-testid="filters-sidebar-opener"
            />
        </form>
    );
};
