import { IMovie } from "@/types";
import { getDateString } from "@/utils";

export const movieProperties = [
    {
        label: "Year",
        getValue: (movie: IMovie) => movie.year ?? null,
    },
    {
        label: "Released",
        getValue: (movie: IMovie) =>
            movie.premiere?.world ? getDateString(movie.premiere.world) : null,
    },
    {
        label: "BoxOffice",
        getValue: (movie: IMovie) =>
            movie.budget ? movie.budget.currency + " " + movie.budget.value : null,
    },
    {
        label: "Country",
        getValue: (movie: IMovie) =>
            movie.countries.map((country) => country.name).join(", ") ?? null,
    },
    {
        label: "Productiion",
        getValue: (movie: IMovie) => {
            const producers = movie.persons
                .filter((person) => person.enProfession === "producer")
                .slice(0, 3)
                .map((person) => person.name)
                .join(", ");

            return producers.length ? producers : null;
        },
    },
    {
        label: "Actors",
        getValue: (movie: IMovie) => {
            const actors = movie.persons
                .filter((person) => person.enProfession === "actor")
                .slice(0, 3)
                .map((person) => person.name)
                .join(", ");

            return actors.length ? actors : null;
        },
    },
    {
        label: "Director",
        getValue: (movie: IMovie) => {
            const director = movie.persons.find((person) => person.enProfession === "director");
            return director ? director.name! : null;
        },
    },
    {
        label: "Writers",
        getValue: (movie: IMovie) => {
            const writers = movie.persons
                .filter((person) => person.enProfession === "writer")
                .slice(0, 3)
                .map((person) => person.name)
                .join(", ");

            return writers.length ? writers : null;
        },
    },
];
