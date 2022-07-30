import * as React from "react";
import * as  ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./users/_stores/userContext";
import { userStore } from "./users/_stores/userStore";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider store={userStore}>
                <App/>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
