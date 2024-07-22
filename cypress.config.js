import { defineConfig } from "cypress";

const baseUrl = "http://localhost:5173";

export default defineConfig({
    env: {
        baseUrl: baseUrl,
        homePageUrl: baseUrl + "/",
        trendsPageUrl: baseUrl + "/trends",
        favouritesPageUrl: baseUrl + "/favourites",
        moviePageUrl: baseUrl + "/movie",
        settingsPageUrl: baseUrl + "/settings",
        signInPageUrl: baseUrl + "/auth/sign-in",
        signUpPageUrl: baseUrl + "/auth/sign-up",
        resetPasswordPageUrl: baseUrl + `/auth/password/reset`,
    },
    e2e: {},
});
