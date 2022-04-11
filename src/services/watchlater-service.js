const { default: axios } = require("axios");

const getWatchLater = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/watchlater", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
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
        return true;
    } catch (error) {
        console.log(error);
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
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export { getWatchLater, addToWatchLater, removeFromWatchLater };
