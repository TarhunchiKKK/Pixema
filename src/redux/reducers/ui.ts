import { IAction, IUIState, THEMES } from "@/types";
import { TOGGLE_BURGER, TOGGLE_COLOR_THEME, TOGGLE_MOVIES_SIDEBAR } from "../actionTypes";
import { setInitialColorTheme, toggleColorTheme } from "@/utils";

const initialState: IUIState = {
    isBurgerOpen: false,
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
            toggleColorTheme();

            return {
                ...state,
                colorTheme: state.colorTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
            };
        }
        case TOGGLE_BURGER: {
            if (state.isBurgerOpen) {
                document.body.style.overflow = "auto";
            } else {
                document.body.style.overflow = "hidden";
            }

            return {
                ...state,
                isBurgerOpen: !state.isBurgerOpen,
            };
        }
        default: {
            return state;
        }
    }
};
