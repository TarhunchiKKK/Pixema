import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import {
    MainLayout,
    HomePage,
    AuthLayout,
    SignInForm,
    SignUpForm,
    ResetForm,
    ActivationPage,
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
                path: ROUTES.ACTIVATION,
                element: <ActivationPage />,
            },
        ],
    },
    {
        path: ROUTES.AUTH,
        element: <AuthLayout />,
        children: [
            {
                path: ROUTES.SIGN_IN,
                // index: true,
                element: <SignInForm />,
            },
            {
                path: ROUTES.SIGN_UP,
                element: <SignUpForm />,
            },
            {
                path: ROUTES.RESET,
                element: <ResetForm />,
            },
        ],
    },
]);
