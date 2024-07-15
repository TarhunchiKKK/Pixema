import { SortIcon } from "@/assets";
import { setMoviesTitle } from "@/redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

export const Search = () => {
    const [title, setTitle] = useState<string>("");
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setMoviesTitle(title));
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <input
                type="text"
                className="px-5 py-4 rounded-[10px] bg-graphite w-full"
                placeholder="Search"
                value={title}
                onChange={handleChange}
            />

            <img
                src={SortIcon}
                alt="Sort"
                className="absolute right-4 top-4 -translate-y-1/2 cursor-pointer"
            />
        </form>
    );
};
