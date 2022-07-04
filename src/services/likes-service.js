import axios from "axios";
import { toast } from "react-toastify";

const getLikedVideos = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/likes", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        toast.error("Can not get liked videos");
    }
};

const addToLikedVideos = async (encodedToken, video) => {
    try {
        const { data } = await axios.post(
            "/api/user/likes",
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        toast.dismiss();
        toast.success("Added to liked videos");
        return true;
    } catch (error) {
        toast.error("Video can not be added to liked videos.");
        return false;
    }
};

const removeFromLikedVideos = async (encodedToken, videoId) => {
    try {
        const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        toast.dismiss();
        toast.error("Removed from liked videos");
        return true;
    } catch (error) {
        toast.error("Video can not be removed from liked videos.");
        return false;
    }
};

export { getLikedVideos, addToLikedVideos, removeFromLikedVideos };
