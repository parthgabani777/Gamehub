import {
    getHistory,
    addToHistory,
    removeFromHistory,
    clearHistory,
} from "../../services/history-service";
import { historyConstant } from "../../reducer/reducerConstant";

const getHistoryHandler = async (encodedToken, dispatchHistory) => {
    const { history } = (await getHistory(encodedToken)) ?? {
        history: [],
    };
    dispatchHistory({
        type: historyConstant.SET_HISTORY,
        payload: history,
    });
};

const addToHistoryHandler = async (encodedToken, dispatchHistory, video) => {
    
    (await addToHistory(encodedToken, video)) &&
        dispatchHistory({
            type: historyConstant.ADD_TO_HISTORY,
            payload: { video },
        });
};

const removeFromHistoryHandler = async (
    encodedToken,
    dispatchHistory,
    video
) => {
    (await removeFromHistory(encodedToken, video._id)) &&
        dispatchHistory({
            type: historyConstant.REMOVE_FROM_HISTORY,
            payload: { video },
        });
};

const resetHistoryHandler = () => {
    dispatchHistory({
        type: historyConstant.RESET_HISTORY,
    });
};

const clearHistoryHandler = async (encodedToken, dispatchHistory) => {
    (await clearHistory(encodedToken)) &&
        dispatchHistory({
            type: historyConstant.RESET_HISTORY,
        });
};

export {
    getHistoryHandler,
    addToHistoryHandler,
    removeFromHistoryHandler,
    resetHistoryHandler,
    clearHistoryHandler,
};
