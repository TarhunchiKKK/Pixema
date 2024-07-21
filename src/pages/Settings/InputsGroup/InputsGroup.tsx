import { FC } from "react";
import { IInputsGroupProps } from "./props";

export const InputsGroup: FC<IInputsGroupProps> = ({ label, children }) => {
    return (
        <>
            <h3 className="font-semibold text-xl leading-8 mb-[18px]">{label}</h3>

            <div className="flex flex-col md:flex-row justify-between items-start p-6 md:p-10 rounded-[10px] gap-5 md:gap-8 bg-context-white dark:bg-dark">
                {children}
            </div>
        </>
    );
};
