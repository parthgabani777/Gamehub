import { findVideo } from "../utils/utils";
import { historyConstant } from "./reducerConstant";

const historyReducer = (state, action) => {
    const { itemInHistory } = state;
    const { video } = action.payload ?? {};
    const { id } = video ?? {};

    switch (action.type) {
        case historyConstant.ADD_TO_HISTORY:
            let isItemInHistory = findVideo(itemInHistory, video);
            return isItemInHistory
                ? state
                : {
                      ...state,
                      itemInHistory: itemInHistory.concat(video),
                  };

        case historyConstant.REMOVE_FROM_HISTORY:
            return {
                ...state,
                itemInHistory: itemInHistory.filter((item) => item.id !== id),
            };

        case historyConstant.SET_HISTORY:
            return {
                itemInHistory: action.payload,
            };

        case historyConstant.RESET_HISTORY:
            return {
                itemInHistory: [],
            };
    }
};

export { historyReducer };
