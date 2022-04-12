import axios from "axios";

const getLikedVideos = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/likes", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
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
        return true;
    } catch (error) {
        console.log(error);
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
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export { getLikedVideos, addToLikedVideos, removeFromLikedVideos };
