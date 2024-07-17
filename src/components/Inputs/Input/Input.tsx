import { FC } from "react";
import { IInputProps } from "./props";

export const Input: FC<IInputProps> = ({ label, ...other }) => {
    return (
        <>
            {label && <label className="font-semibold text-base block mb-2">{label}</label>}

            <input
                className="w-full rounded-[10px] bg-graphite outline-none border-2 border-transparent focus:border-primary px-5 py-[14px] box-border"
                {...other}
            />
        </>
    );
};
