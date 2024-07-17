import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { MainLayout, HomePage } from "@/pages";

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
        ],
    },
]);
