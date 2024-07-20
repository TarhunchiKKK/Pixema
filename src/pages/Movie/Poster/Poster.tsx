import { FC } from "react";
import { IPosterProps } from "./props";
import { DefaultPoster } from "@/assets";

export const Poster: FC<IPosterProps> = ({ movie }) => {
    return (
        <div className="mx-auto min-w-[272px] max-w-[400px] md:min-w-[208px] lg:min-w-[266px]">
            <div className="w-full min-h-[364px] md:h-[278px] lg:h-[356px] mb-6 md:mb-8 rounded-[20px] overflow-hidden ">
                <img
                    src={movie.poster?.url ?? DefaultPoster}
                    alt={movie.name}
                    className="w-full h-full"
                />
            </div>

            <div className="flex gap-[1px] rounded-[10px] overflow-hidden bg-graphite">
                <button className="grow text-center py-4 cursor-pointer">
                    <i className="fa-solid fa-bookmark"></i>
                </button>
                <button className="grow text-center py-4 cursor-pointer">
                    <i className="fa-regular fa-share-nodes"></i>
                </button>
            </div>
        </div>
    );
};
