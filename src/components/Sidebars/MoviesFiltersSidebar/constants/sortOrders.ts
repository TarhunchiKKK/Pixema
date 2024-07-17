import { ITabsInputOption } from "@/components";
import { SORT_ORDERS } from "@/types";

export const sortOrders: ITabsInputOption[] = [
    {
        label: "Rating",
        value: SORT_ORDERS.RATING,
    },
    {
        label: "Year",
        value: SORT_ORDERS.YEAR,
    },
];
