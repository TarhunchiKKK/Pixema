/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function* getToken() {
    const accessToken = localStorage.getItem(
        import.meta.env.VITE_ACCESS_TOKEN_LOCALSTORAGE_KEY as string,
    );

    if (accessToken) {
        const response: Response = yield fetch(
            `https://studapi.teachmeskills.by/auth/jwt/verify/`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: accessToken }),
            },
        );

        if (response.status === 200) {
            return accessToken;
        }
    }

    const refreshToken = localStorage.getItem(
        import.meta.env.VITE_REFRESH_TOKEN_LOCALSTORAGE_KEY as string,
    );
    if (refreshToken) {
        const refreshResponse: Response = yield fetch(
            `https://studapi.teachmeskills.by/auth/jwt/refresh/`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh: refreshToken }),
            },
        );
        const { access }: { access: string } = yield refreshResponse.json();
        localStorage.setItem(import.meta.env.VITE_ACCESS_TOKEN_LOCALSTORAGE_KEY as string, access);
        return access;
    }

    return null;
}
