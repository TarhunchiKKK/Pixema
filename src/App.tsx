import { Provider } from "react-redux";
import { store } from "./redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router";

export const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
