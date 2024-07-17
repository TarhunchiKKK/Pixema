import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Layout, HomePage } from "@/pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <Layout />,
        children: [
            {
                path: ROUTES.HOME,
                index: true,
                element: <HomePage />,
            },
        ],
    },
]);
