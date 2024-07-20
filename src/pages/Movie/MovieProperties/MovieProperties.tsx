import { FC } from "react";
import { IMoviePropertiesProps } from "./props";
import { movieProperties } from "../constants";

export const MovieProperties: FC<IMoviePropertiesProps> = ({ movie }) => {
    return (
        <table className="table-fixed">
            <tbody>
                {movieProperties.map(({ label, getValue }) => {
                    const value = getValue(movie);
                    if (value) {
                        return (
                            <tr key={label}>
                                <td className="font-medium text-base text-context-light w-1/2 align-top">
                                    {label}
                                </td>
                                <td className="font-medium text-base">{value}</td>
                            </tr>
                        );
                    }
                    return null;
                })}
            </tbody>
        </table>
    );
};
