import { AUTH_OPERATIONS } from "@/types";

export const ROUTES = {
    BASE: "/",
    HOME: "/",
    TRENDS: "/trends",
    FAVOURITES: "/favourites",
    MOVIE: "/movie",
    SETTINGS: "/settings",
    AUTH: "/auth",
    SIGN_IN: `/auth/${AUTH_OPERATIONS.SIGN_IN}`,
    SIGN_UP: `/auth/${AUTH_OPERATIONS.SIGN_UP}`,
    RESET: `/auth/${AUTH_OPERATIONS.RESET}`,
    ACTIVATION: `/activate/:uid/:token`,
};
