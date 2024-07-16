import { FC } from "react";
import { IDropdownProps } from "./props";

export const Dropdown: FC<IDropdownProps> = ({ label, options, ...other }) => {
    return (
        <>
            <label className="font-semibold text-base block mb-2">{label}</label>
            <select {...other}>
                {options.map((option, idx) => (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
};
