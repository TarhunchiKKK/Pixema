import { ChangeEvent } from "react";

export interface IDropdownProps {
    label: string;
    placeholder?: string;
    defaultValue?: string;
    options: string[];
    value: string;
    onChange: (_: ChangeEvent<HTMLSelectElement>) => void;
}
