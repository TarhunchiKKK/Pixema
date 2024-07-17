import { FC } from "react";
import { useDispatch } from "react-redux";
import { BurgerIcon } from "@/assets";
import { toggleMoviesSidebar } from "@/redux";

export const Burger: FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => dispatch(toggleMoviesSidebar());

    return (
        <img
            src={BurgerIcon}
            key="Burger"
            alt="Durger"
            className="w-14 h-14 cursor-pointer"
            onClick={handleClick}
        />
    );
};
