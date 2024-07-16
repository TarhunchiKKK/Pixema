import { MouseEvent } from "react";

export interface IButtonProps {
    content: string;
    onClick?: ((e: MouseEvent<HTMLButtonElement>) => void) | (() => void);
    isPrimary: boolean;
}
