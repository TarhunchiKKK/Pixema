import { ChangeEvent } from "react";

export interface IInputProps {
    label: string | null;
    type?: string;
    placeholder?: string;
    value: string | number;
    onChange: (_: ChangeEvent<HTMLInputElement>) => void;
}
