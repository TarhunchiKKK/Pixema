import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BurgerIcon, CrossIcon } from "@/assets";
import { toggleBurger } from "@/redux";
import { IRootState } from "@/types";

export const Burger: FC = () => {
    const dispatch = useDispatch();
    const isBurgerOpen = useSelector((state: IRootState) => state.ui.isBurgerOpen);

    const handleClick = () => {
        dispatch(toggleBurger());
    };

    return (
        <img
            src={isBurgerOpen ? CrossIcon : BurgerIcon}
            alt="Burger"
            className="w-14 h-14 cursor-pointer"
            onClick={handleClick}
        />
    );
};
