import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import {
    MainLayout,
    HomePage,
    AuthLayout,
    SignInForm,
    SignUpForm,
    ResetPasswordForm,
    ResetPasswordConfirmForm,
    ActivationPage,
    SettingsPage,
    MoviePage,
    FavouritesPage,
    TrendsPage,
} from "@/pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <MainLayout />,
        children: [
            {
                path: ROUTES.HOME,
                index: true,
                element: <HomePage />,
            },
            {
                path: ROUTES.TRENDS,
                element: <TrendsPage />,
            },
            {
                path: `${ROUTES.MOVIE}/:id`,
                element: <MoviePage />,
            },
            {
                path: ROUTES.FAVOURITES,
                element: <FavouritesPage />,
            },
            {
                path: ROUTES.SETTINGS,
                element: <SettingsPage />,
            },
        ],
    },
    {
        path: ROUTES.AUTH,
        element: <AuthLayout />,
        children: [
            {
                path: ROUTES.SIGN_IN,
                element: <SignInForm />,
            },
            {
                path: ROUTES.SIGN_UP,
                element: <SignUpForm />,
            },
            {
                path: ROUTES.ACTIVATION,
                element: <ActivationPage />,
            },
            {
                path: ROUTES.RESET_PASSWORD,
                element: <ResetPasswordForm />,
            },
            {
                path: ROUTES.RESET_PASSWORD_CONFIRM,
                element: <ResetPasswordConfirmForm />,
            },
        ],
    },
]);
