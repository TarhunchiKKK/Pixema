import { ChangeEvent } from "react";
import { IDropdownOption } from "../types";

export interface IDropdownProps {
    label: string;
    defaultValue?: string;
    options: IDropdownOption[];
    value?: string;
    onChange: (_: ChangeEvent<HTMLSelectElement>) => void;
}
