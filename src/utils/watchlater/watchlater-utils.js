import {
    addToWatchLater,
    getWatchLater,
    removeFromWatchLater,
} from "../../services/watchlater-service";
import { watchLaterConstant } from "../../reducer/reducerConstant";

const getWatchLaterHandler = async (encodedToken, dispatchWishlist) => {
    const { watchlater } = (await getWatchLater(encodedToken)) ?? {
        watchlater: [],
    };
    dispatchWishlist({
        type: watchLaterConstant.SET_WATCHLATER,
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
            type: watchLaterConstant.ADD_TO_WATCHLATER,
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
            type: watchLaterConstant.REMOVE_FROM_WATCHLATER,
            payload: { video },
        });
};

const resetWatchLaterHandler = () => {
    dispatchWatchLater({
        type: watchLaterConstant.RESET_WATCHLATER,
    });
};

export {
    getWatchLaterHandler,
    addToWatchLaterHandler,
    removeFromWatchLaterHandler,
    resetWatchLaterHandler,
};
