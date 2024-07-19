/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { getToken } from "../utils";
import { setUser } from "../actionCreators";
import { IUser } from "@/types";
import { put, takeEvery } from "redux-saga/effects";
import { FETCH_USER } from "../actionTypes";

function* fetchUserWorker() {
    const token: string = yield getToken();

    if (!token) {
        return;
    }

    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.status === 200) {
        const user: IUser = yield response.json();
        yield put(setUser(user));
    }
}

export function* userWatcher() {
    yield takeEvery(FETCH_USER, fetchUserWorker);
}
