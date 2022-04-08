import { findVideo } from "../utils/utils";

const watchLaterReducer = (state, action) => {
    const { itemInWatchLater } = state;
    const { video } = action.payload ?? {};
    const { id } = video ?? {};

    switch (action.type) {
        case "ADD_TO_WATCHLATER":
            let isItemInWatchLater = findVideo(itemInWatchLater, video);
            return isItemInWatchLater
                ? state
                : {
                      ...state,
                      itemInWatchLater: itemInWatchLater.concat(video),
                  };

        case "REMOVE_FROM_WATCHLATER":
            return {
                ...state,
                itemInWatchLater: itemInWatchLater.filter(
                    (item) => item.id !== id
                ),
            };

        case "SET_WATCHLATER":
            return {
                itemInWatchLater: action.payload,
            };

        case "RESET_WATCHLATER":
            return {
                itemInWatchLater: [],
            };
    }
};

export { watchLaterReducer };
