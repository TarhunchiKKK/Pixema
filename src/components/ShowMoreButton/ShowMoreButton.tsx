import { FC } from "react";
import { IShowMoreButtonProps } from "./props";

export const ShowMoreButton: FC<IShowMoreButtonProps> = ({ isLoading, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="mx-auto rounded-[40px] bg-context-light dark:bg-dark w-[161px] h-10 px-6 py-1 flex items-center justify-between"
        >
            <span className="font-medium text-base">Show More</span>

            {isLoading && (
                <span className="block w-4 h-4 border-[2.5px] border-r-0 border-primary animate-spin"></span>
            )}
        </button>
    );
};
