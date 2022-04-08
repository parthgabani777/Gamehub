import {
    addToWatchLater,
    getWatchLater,
    removeFromWatchLater,
} from "../../services/watchlater-service";

const getWatchLaterHandler = async (encodedToken, dispatchWishlist) => {
    const { watchlater } = (await getWatchLater(encodedToken)) ?? {
        watchlater: [],
    };
    dispatchWishlist({
        type: "SET_WATCHLATER",
        payload: watchlater,
    });
};

const addToWatchLaterHandler = async (
    encodedToken,
    dispatchWatchLater,
    video
) => {
    (await addToWatchLater(encodedToken, video)) &&
        dispatchWatchLater({
            type: "ADD_TO_WATCHLATER",
            payload: { video },
        });
};

const removeFromWatchLaterHandler = async (
    encodedToken,
    dispatchWatchLater,
    video
) => {
    (await removeFromWatchLater(encodedToken, video._id)) &&
        dispatchWatchLater({
            type: "REMOVE_FROM_WATCHLATER",
            payload: { video },
        });
};

const resetWatchLaterHandler = () => {
    dispatchWatchLater({
        type: "RESET_WATCHLATER",
    });
};

export {
    getWatchLaterHandler,
    addToWatchLaterHandler,
    removeFromWatchLaterHandler,
    resetWatchLaterHandler,
};
