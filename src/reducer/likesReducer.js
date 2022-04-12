import { findVideo } from "../utils/utils";
import { likesConstant } from "./reducerConstant";

const likesReducer = (state, action) => {
    const { itemInLikedVideos } = state;
    const { video } = action.payload ?? {};
    const { id } = video ?? {};

    switch (action.type) {
        case likesConstant.ADD_TO_LIKEDVIDEOS:
            let isItemInLikedVideos = findVideo(itemInLikedVideos, video);
            return isItemInLikedVideos
                ? state
                : {
                      ...state,
                      itemInLikedVideos: itemInLikedVideos.concat(video),
                  };

        case likesConstant.REMOVE_FROM_LIKEDVIDEOS:
            return {
                ...state,
                itemInLikedVideos: itemInLikedVideos.filter(
                    (item) => item.id !== id
                ),
            };

        case likesConstant.SET_LIKEDVIDEOS:
            return {
                itemInLikedVideos: action.payload,
            };

        case likesConstant.REMOVE_FROM_LIKEDVIDEOS:
            return {
                itemInLikedVideos: [],
            };
    }
};

export { likesReducer };
