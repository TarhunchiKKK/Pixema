import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    // </StrictMode>,
);
