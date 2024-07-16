import { IAction, IUIState } from "@/types";
import { TOGGLE_MOVIES_SIDEBAR } from "../actionTypes";

const initialState: IUIState = {
    isMoviesSidebarOpen: false,
};

export const uiReducer = (state: IUIState = initialState, action: IAction) => {
    switch (action.type) {
        case TOGGLE_MOVIES_SIDEBAR: {
            return {
                ...state,
                isMoviesSidebarOpen: !state.isMoviesSidebarOpen,
            };
        }
        default: {
            return state;
        }
    }
};
