import { FC, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux";
import { router } from "./constants";

export const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    });

    return <RouterProvider router={router} />;
};
