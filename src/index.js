import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "./context/user-hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserDataProvider>
                <App />
                <ToastContainer
                    style={{
                        fontSize: 16,
                    }}
                    position={"bottom-right"}
                    autoClose={2000}
                    theme="dark"
                />
            </UserDataProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
