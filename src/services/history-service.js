import axios from "axios";

const getHistory = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/history", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
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
        console.log(error);
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
        console.log(error);
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
        console.log(error);
        return false;
    }
};

export { getHistory, addToHistory, removeFromHistory, clearHistory };
