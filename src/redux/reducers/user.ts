import { IAction, IUser, IUserState } from "@/types";
import { SET_USER } from "../actionTypes";

const initialState: IUserState = {
    id: 0,
    username: "",
    email: "",
};

export const userReducer = (state: IUserState = initialState, action: IAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...(action.payload as IUser),
            };
        default:
            return state;
    }
};
