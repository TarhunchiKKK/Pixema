import { ITabsInputOption } from "../types";

export interface ITabsInputProps {
    label: string;
    tabs: ITabsInputOption[];
    value: string;
    onChange: (_: string) => void;
}
