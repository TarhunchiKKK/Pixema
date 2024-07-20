import { IMovie } from "@/types";

export interface IMovieCardProps {
    movie: Pick<IMovie, "id" | "name" | "genres" | "poster" | "rating" | "alternativeName">;
}
