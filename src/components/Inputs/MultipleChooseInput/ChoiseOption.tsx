import { FC } from "react";
import { CrossIcon, PlusIcon } from "@/assets";
import { IChoiseOptionProps } from "./props";

export const ChoiseOption: FC<IChoiseOptionProps> = ({ content, isSelected, onChoose }) => {
    return (
        <div className="flex justify-between items-center gap-1 my-3 px-2 py-1 bg-dark rounded-[6px]">
            <span className="font-medium text-base">{content}</span>

            <img
                src={isSelected ? CrossIcon : PlusIcon}
                className="cursor-pointer"
                alt={isSelected ? "Remove" : "Add"}
                onClick={() => onChoose(content)}
            />
        </div>
    );
};
