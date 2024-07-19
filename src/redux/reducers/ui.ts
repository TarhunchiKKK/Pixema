import { IAction, IUIState, THEMES } from "@/types";
import { TOGGLE_COLOR_THEME, TOGGLE_MOVIES_SIDEBAR } from "../actionTypes";
import { setInitialColorTheme, toggleColorTheme } from "@/utils";

const initialState: IUIState = {
    isMoviesSidebarOpen: false,
    colorTheme: setInitialColorTheme() as THEMES,
};

export const uiReducer = (state: IUIState = initialState, action: IAction) => {
    switch (action.type) {
        case TOGGLE_MOVIES_SIDEBAR: {
            return {
                ...state,
                isMoviesSidebarOpen: !state.isMoviesSidebarOpen,
            };
        }
        case TOGGLE_COLOR_THEME: {
            // const nextTheme = state.colorTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            // localStorage.setItem(import.meta.env.VITE_THEME_LOCALSTORAGE_KEY as string, nextTheme);

            toggleColorTheme();

            return {
                ...state,
                colorTheme: state.colorTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
            };
        }
        default: {
            return state;
        }
    }
};
