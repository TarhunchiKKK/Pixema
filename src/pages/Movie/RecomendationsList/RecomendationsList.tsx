import { FC, useLayoutEffect, useRef, useState } from "react";
import { IRecomendationsListProps } from "./props";
import { MovieCard } from "@/components";

export const RecomendationsList: FC<IRecomendationsListProps> = ({ movies }) => {
    const wrapperRef = useRef<HTMLInputElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState<number>(0);

    useLayoutEffect(() => {
        const width = wrapperRef.current!.offsetWidth;
        console.log(width);
        setCarouselWidth(width);
    }, []);

    return (
        <div ref={wrapperRef}>
            <div className="flex justify-between">
                <h3 className="font-medium text-xl leading-9">Recomendations</h3>

                <span>kxcgnj,f</span>
            </div>

            <div
                ref={carouselRef}
                style={{ maxWidth: carouselWidth }}
                className="inline-flex gap-8 lg:gap-10 overflow-x-auto no-scroll"
            >
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};
