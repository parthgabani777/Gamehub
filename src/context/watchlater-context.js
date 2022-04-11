import { createContext, useContext, useReducer, useEffect } from "react";
import { watchLaterReducer } from "../reducer/watchLaterReducer";
import { useAuth } from "./auth-context";
import {
    getWatchLaterHandler,
    addToWatchLaterHandler,
    removeFromWatchLaterHandler,
    resetWatchLaterHandler,
} from "../utils/watchlater/watchlater-utils";

const defaultWatchLaterValue = {
    itemInWatchLater: [],
};

const watchLaterContext = createContext();

const useWatchLater = () => useContext(watchLaterContext);

const WatchLaterProvider = ({ children }) => {
    const [watchLater, dispatchWatchLater] = useReducer(
        watchLaterReducer,
        defaultWatchLaterValue
    );

    const { auth } = useAuth();

    useEffect(() => {
        auth.isAuthorized &&
            getWatchLaterHandler(auth.token, dispatchWatchLater);
    }, []);

    return (
        <watchLaterContext.Provider
            value={{
                watchLater,
                dispatchWatchLater,
                getWatchLaterHandler,
                addToWatchLaterHandler,
                removeFromWatchLaterHandler,
                resetWatchLaterHandler,
            }}
        >
            {children}
        </watchLaterContext.Provider>
    );
};

export { WatchLaterProvider, useWatchLater };
