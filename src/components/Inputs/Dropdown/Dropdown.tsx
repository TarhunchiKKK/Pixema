import { FC } from "react";
import { IDropdownProps } from "./props";

export const Dropdown: FC<IDropdownProps> = ({ label, value, options, ...other }) => {
    return (
        <>
            <label className="font-semibold text-base text-white block mb-2">{label}</label>

            <select
                className={`w-full rounded-[10px] bg-graphite ${value ? "text-white" : "text-secondary"} outline-none border-2 border-transparent focus:border-primary px-5 py-[16.5px] no-scroll`}
                value={value}
                {...other}
            >
                {options.map((option, idx) => (
                    <option key={idx} value={option.value} defaultChecked={!option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};
