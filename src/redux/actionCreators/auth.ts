import { IResetPasswordDto, ISignInDto, ISignUpDto, IUser, IUserActivationDto } from "@/types";
import {
    ACTIVATE_USER,
    RESET_PASSWORD,
    RESET_PASSWORD_CONFIRM,
    SET_USER,
    SIGN_IN,
    SIGN_UP,
} from "../actionTypes";

export const setUser = (user: IUser) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const signIn = (data: ISignInDto) => {
    return {
        type: SIGN_IN,
        payload: data,
    };
};

export const signUp = (data: ISignUpDto) => {
    return {
        type: SIGN_UP,
        payload: data,
    };
};

export const activateUser = (data: IUserActivationDto) => {
    return {
        type: ACTIVATE_USER,
        payload: data,
    };
};

export const resetPassword = (email: string) => {
    return {
        type: RESET_PASSWORD,
        payload: email,
    };
};

export const resetPasswordConfirm = (data: IResetPasswordDto) => {
    return {
        type: RESET_PASSWORD_CONFIRM,
        payload: data,
    };
};
