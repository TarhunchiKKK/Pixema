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
        <form
            onSubmit={handleSubmit}
            className="relative w-full md:w-auto md:grow order-2 md:order-none  mt-8 md:mt-0 md:ml-[84px] md:mr-8"
        >
            <input
                type="text"
                className="px-5 py-4 rounded-[10px] bg-graphite w-full outline-none border-2 border-transparent focus:border-primary"
                placeholder="Search"
                value={title}
                onChange={handleChange}
            />

            <img
                src={SortIcon}
                alt="Sort"
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            />
        </form>
    );
};
