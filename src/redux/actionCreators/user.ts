import { FETCH_USER, UPDATE_USERNAME } from "../actionTypes";

export const fetchUser = () => {
    return {
        type: FETCH_USER,
    };
};

export const updateUsername = (username: string) => {
    return {
        type: UPDATE_USERNAME,
        payload: username,
    };
};
