import axios from "axios";
import { toast } from "react-toastify";

const getHistory = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/history", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        toast.error("can not get history.");
    }
};

const addToHistory = async (encodedToken, video) => {
    try {
        const { data } = await axios.post(
            "/api/user/history",
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        return true;
    } catch (error) {
        toast.error("Video can not be added to history.");
        return false;
    }
};

const removeFromHistory = async (encodedToken, videoId) => {
    try {
        const { data } = await axios.delete(`/api/user/history/${videoId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        return true;
    } catch (error) {
        toast.error("Video can not be added to history.");
        return false;
    }
};

const clearHistory = async (encodedToken) => {
    try {
        const { data } = await axios.delete("/api/user/history/all", {
            headers: {
                authorization: encodedToken,
            },
        });
        return true;
    } catch (error) {
        toast.error("History can not be cleared");
        return false;
    }
};

export { getHistory, addToHistory, removeFromHistory, clearHistory };
