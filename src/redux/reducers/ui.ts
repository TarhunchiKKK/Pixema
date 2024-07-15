import { IAction, IUIState } from "@/types";
import { TOGGLE_SIDEBAR } from "../actionTypes";

const initialState: IUIState = {
    isSidebarOpen: false,
};

export const uiReducer = (state: IUIState = initialState, action: IAction) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR: {
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        }
        default: {
            return state;
        }
    }
};
