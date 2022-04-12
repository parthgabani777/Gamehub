import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "./context/user-hooks";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserDataProvider>
                <App />
            </UserDataProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
