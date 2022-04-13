import { createContext, useContext, useReducer, useEffect } from "react";
import { likesReducer } from "../reducer/likesReducer";
import { useAuth } from "./auth-context";
import {
    getLikedVideosHandler,
    addToLikedVideosHandler,
    removeFromLikedVideosHandler,
    resetLikedVideosHandler,
} from "../utils/likes/likes-utils";

const defaultLikedVideosValue = {
    itemInLikedVideos: [],
};

const likedVideosContext = createContext();

const useLikedVideos = () => useContext(likedVideosContext);

const LikedVideosProvider = ({ children }) => {
    const [likedVideos, dispatchLikedVideos] = useReducer(
        likesReducer,
        defaultLikedVideosValue
    );

    const { auth } = useAuth();

    useEffect(() => {
        auth.isAuthorized &&
            getLikedVideosHandler(auth.token, dispatchLikedVideos);
    }, []);

    return (
        <likedVideosContext.Provider
            value={{
                likedVideos,
                dispatchLikedVideos,
                getLikedVideosHandler,
                addToLikedVideosHandler,
                removeFromLikedVideosHandler,
                resetLikedVideosHandler,
            }}
        >
            {children}
        </likedVideosContext.Provider>
    );
};

export { LikedVideosProvider, useLikedVideos };
