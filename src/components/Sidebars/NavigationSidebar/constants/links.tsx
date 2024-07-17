import { ROUTES } from "@/constants";

export const links = [
    {
        path: ROUTES.HOME,
        label: "Home",
        icon: <i className="fa-solid fa-house text-inherit"></i>,
    },
    {
        path: ROUTES.TRENDS,
        label: "Trends",
        icon: <i className="fa-solid fa-fire-flame-curved text-inherit"></i>,
    },
    {
        path: ROUTES.FAVOURITES,
        label: "Favourites",
        icon: <i className="fa-solid fa-bookmark text-inherit"></i>,
    },
    {
        path: ROUTES.SETTINGS,
        label: "Settings",
        icon: <i className="fa-solid fa-gear text-inherit"></i>,
    },
];
