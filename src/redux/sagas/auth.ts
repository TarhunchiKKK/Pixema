/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { put, takeEvery } from "redux-saga/effects";
import { getToken } from "../utils";
import { setUser } from "../actionCreators";
import {
    IAction,
    IResetPasswordDto,
    ISignInDto,
    ISignUpDto,
    ITokenPair,
    IUser,
    IUserActivationDto,
} from "@/types";
import {
    ACTIVATE_USER,
    RESET_PASSWORD,
    RESET_PASSWORD_CONFIRM,
    SIGN_IN,
    SIGN_UP,
} from "../actionTypes";

function* signInWorker(action: IAction<ISignInDto>) {
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/create/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
    });

    if (response.status === 200) {
        const tokens: ITokenPair = yield response.json();

        localStorage.setItem(
            import.meta.env.VITE_ACCESS_TOKEN_LOCALSTORAGE_KEY as string,
            tokens.access,
        );
        localStorage.setItem(
            import.meta.env.VITE_REFRESH_TOKEN_LOCALSTORAGE_KEY as string,
            tokens.refresh,
        );
    }
}

function* signUpWorker(action: IAction<ISignUpDto>) {
    const response: Response = yield fetch("https://studapi.teachmeskills.by/auth/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
    });

    if (response.status === 200) {
        const user: IUser = yield response.json();
        yield put(setUser(user));
    }
}

function* userActivationWorker(action: IAction<IUserActivationDto>) {
    yield fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
    });
}

function* resetPasswordWorker(action: IAction<string>) {
    const token: string = yield getToken();

    if (!token) {
        return;
    }

    yield fetch(`https://studapi.teachmeskills.by/auth/users/reset_password/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: action.payload }),
    });
}

function* resetPasswordConfirmWorker(action: IAction<IResetPasswordDto>) {
    const token: string = yield getToken();

    if (!token) {
        return;
    }

    yield fetch(`https://studapi.teachmeskills.by/auth/users/reset_password_confirm/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(action.payload),
    });
}

export function* authWatcher() {
    yield takeEvery(SIGN_IN, signInWorker);
    yield takeEvery(SIGN_UP, signUpWorker);
    yield takeEvery(ACTIVATE_USER, userActivationWorker);
    yield takeEvery(RESET_PASSWORD, resetPasswordWorker);
    yield takeEvery(RESET_PASSWORD_CONFIRM, resetPasswordConfirmWorker);
}
