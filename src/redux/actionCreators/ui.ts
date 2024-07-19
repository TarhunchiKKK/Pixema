import { TOGGLE_COLOR_THEME, TOGGLE_MOVIES_SIDEBAR } from "../actionTypes";

export const toggleMoviesSidebar = () => {
    return {
        type: TOGGLE_MOVIES_SIDEBAR,
        payload: null,
    };
};

export const toggleColorTheme = () => {
    return {
        type: TOGGLE_COLOR_THEME,
        payload: null,
    };
};
