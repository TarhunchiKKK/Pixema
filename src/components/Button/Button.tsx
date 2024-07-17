import { FC } from "react";
import { IButtonProps } from "./props";

export const Button: FC<IButtonProps> = ({ content, onClick, isPrimary }) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-[10px] text-white font-semibold text-base text-center py-4 ${isPrimary ? "bg-primary" : "bg-graphite"}`}
        >
            {content}
        </button>
    );
};
