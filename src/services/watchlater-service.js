import axios from "axios";
import { toast } from "react-toastify";

const getWatchLater = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/watchlater", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        toast.error("Can not get watch later videos.");
    }
};

const addToWatchLater = async (encodedToken, video) => {
    try {
        const { data } = await axios.post(
            "/api/user/watchlater",
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        toast.dismiss();
        toast.success("Added to watch later");
        return true;
    } catch (error) {
        toast.error("Videos can not be added to watch later.");
        return false;
    }
};

const removeFromWatchLater = async (encodedToken, videoId) => {
    try {
        const { data } = await axios.delete(`/api/user/watchlater/${videoId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        toast.dismiss();
        toast.error("Removed From watch later");
        return true;
    } catch (error) {
        toast.error("Videos can not be removed from watch later.");
        return false;
    }
};

export { getWatchLater, addToWatchLater, removeFromWatchLater };
