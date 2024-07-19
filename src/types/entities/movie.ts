import { COUNTRIES, GENRES } from "../enums";
import { IPerson } from "./person";
import { IRating } from "./rating";

export interface IMovie {
    id: number;
    name?: string;
    alternativeName: string | null;
    enName?: unknown;
    type: string;
    typeNumber: number;
    year: number | null;
    description: string | null;
    shortDescription?: string | null;
    slogan?: unknown;
    status?: unknown;
    rating: IRating;
    votes: IRating;
    movieLength: number | null;
    totalSeriesLength?: unknown;
    seriesLength?: unknown;
    ratingMpaa: string | null;
    ageRating?: unknown;
    poster?: {
        url: string;
        previewUrl: string;
    };
    genres: {
        name: GENRES;
    }[];
    countries: {
        name: COUNTRIES;
    }[];
    persons: IPerson[];
    fees?: {
        world: {
            value: number;
            currency: string;
        };
        usa: {
            value: number;
            currency: string;
        };
    };
    premiere?: {
        world: string;
        russia?: unknown;
        digital?: unknown;
        cinema?: unknown;
        bluray?: unknown;
        dvd?: unknown;
    };
    top10?: unknown;
    top250?: unknown;
    isSeries: boolean;
    ticketsOnSale: boolean;
    lists: unknown[];
    createdAt: string;
    updatedAt: string;
}
