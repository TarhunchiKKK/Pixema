import { FC } from "react";
import { IInputProps } from "./props";

export const Input: FC<IInputProps> = ({ label, ...other }) => {
    return (
        <>
            {label && <label className="font-semibold text-base block mb-2">{label}</label>}
            <input
                className="w-full rounded-[10px] bg-graphite border-2 border-transparent focus:border-primary px-4 py-5"
                {...other}
            />
        </>
    );
};
