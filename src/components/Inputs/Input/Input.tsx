import { FC } from "react";
import { IInputProps } from "./props";

export const Input: FC<IInputProps> = ({ label, error, ...other }) => {
    return (
        <>
            {label && <label className="font-semibold text-base block mb-2">{label}</label>}

            <input
                className="w-full rounded-[10px] bg-white dark:bg-graphite outline-none border-2 border-context-light dark:border-transparent dark:focus:border-primary px-5 py-[14px] box-border"
                {...other}
            />

            {error && (
                <span className="font-medium text-base text-context-error mt-1">{error}</span>
            )}
        </>
    );
};
