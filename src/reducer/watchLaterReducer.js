import { findVideo } from "../utils/utils";
import { watchLaterConstant } from "./reducerConstant";

const watchLaterReducer = (state, action) => {
    const { itemInWatchLater } = state;
    const { video } = action.payload ?? {};
    const { id } = video ?? {};

    switch (action.type) {
        case watchLaterConstant.ADD_TO_WATCHLATER:
            let isItemInWatchLater = findVideo(itemInWatchLater, video);
            return isItemInWatchLater
                ? state
                : {
                      ...state,
                      itemInWatchLater: itemInWatchLater.concat(video),
                  };

        case watchLaterConstant.REMOVE_FROM_WATCHLATER:
            return {
                ...state,
                itemInWatchLater: itemInWatchLater.filter(
                    (item) => item.id !== id
                ),
            };

        case watchLaterConstant.SET_WATCHLATER:
            return {
                itemInWatchLater: action.payload,
            };

        case watchLaterConstant.RESET_WATCHLATER:
            return {
                itemInWatchLater: [],
            };
    }
};

export { watchLaterReducer };
