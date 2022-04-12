import { createContext, useContext, useReducer, useEffect } from "react";
import { historyReducer } from "../reducer/historyReducer";
import { useAuth } from "./auth-context";
import {
    addToHistoryHandler,
    getHistoryHandler,
    removeFromHistoryHandler,
    resetHistoryHandler,
    clearHistoryHandler,
} from "../utils/history/history-utils";

const defaultHistoryValue = {
    itemInHistory: [],
};

const historyContext = createContext();

const useHistory = () => useContext(historyContext);

const HistoryProvider = ({ children }) => {
    const [history, dispatchHistory] = useReducer(
        historyReducer,
        defaultHistoryValue
    );

    const { auth } = useAuth();

    useEffect(() => {
        auth.isAuthorized && getHistoryHandler(auth.token, dispatchHistory);
    }, []);

    return (
        <historyContext.Provider
            value={{
                history,
                dispatchHistory,
                getHistoryHandler,
                addToHistoryHandler,
                removeFromHistoryHandler,
                resetHistoryHandler,
                clearHistoryHandler,
            }}
        >
            {children}
        </historyContext.Provider>
    );
};

export { HistoryProvider, useHistory };
