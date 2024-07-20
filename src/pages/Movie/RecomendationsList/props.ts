import { IMovie } from "@/types";

export interface IRecomendationsListProps {
    movies: Pick<IMovie, "id" | "name" | "genres" | "poster" | "rating" | "alternativeName">[];
}
