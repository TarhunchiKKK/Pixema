import { IDropdownOption } from "@/components";
import { COUNTRIES } from "@/types";
import { defaultCountry } from "./defaultCountry";

export const countries: IDropdownOption[] = [
    { label: defaultCountry, value: undefined },
    ...Object.values(COUNTRIES).map((country) => ({ label: country, value: country })),
];
