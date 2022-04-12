import {
    getLikedVideos,
    addToLikedVideos,
    removeFromLikedVideos,
} from "../../services/likes-service";
import { likesConstant } from "../../reducer/reducerConstant";

const getLikedVideosHandler = async (encodedToken, dispatchWishlist) => {
    const { likes } = (await getLikedVideos(encodedToken)) ?? {
        likes: [],
    };
    dispatchWishlist({
        type: likesConstant.SET_LIKEDVIDEOS,
        payload: likes,
    });
};

const addToLikedVideosHandler = async (
    encodedToken,
    dispatchLikedVideos,
    video
) => {
    (await addToLikedVideos(encodedToken, video)) &&
        dispatchLikedVideos({
            type: likesConstant.ADD_TO_LIKEDVIDEOS,
            payload: { video },
        });
};

const removeFromLikedVideosHandler = async (
    encodedToken,
    dispatchLikedVideos,
    video
) => {
    (await removeFromLikedVideos(encodedToken, video._id)) &&
        dispatchLikedVideos({
            type: likesConstant.REMOVE_FROM_LIKEDVIDEOS,
            payload: { video },
        });
};

const resetLikedVideosHandler = () => {
    dispatchLikedVideos({
        type: likesConstant.RESET_LIKEDVIDEOS,
    });
};

export {
    getLikedVideosHandler,
    addToLikedVideosHandler,
    removeFromLikedVideosHandler,
    resetLikedVideosHandler,
};
