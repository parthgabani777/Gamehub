import axios from "axios";
import { toast } from "react-toastify";

const getPlaylists = async (encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/playlists", {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        toast.error("Can not get platlists.");
    }
};

const addPlaylist = async (encodedToken, video) => {
    try {
        const { data } = await axios.post(
            "/api/user/playlists",
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        return data.playlists;
    } catch (error) {
        toast.error("Playlist can not be created.");
        return false;
    }
};

const removePlaylist = async (encodedToken, videoId) => {
    try {
        const { data } = await axios.delete(`/api/user/playlists/${videoId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        return true;
    } catch (error) {
        toast.error("Playlist can not be removed.");
        return false;
    }
};

const getPlaylistVideos = async (encodedToken, playlistId) => {
    try {
        const { data } = await axios.get(`/api/user/playlists/${playlistId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        return data;
    } catch (error) {
        toast.error("Can not get playlist video.");
    }
};

const addVideoToPlaylist = async (encodedToken, playlistId, video) => {
    try {
        const { data } = await axios.post(
            `/api/user/playlists/${playlistId}`,
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        return true;
    } catch (error) {
        toast.error("Video can not be added to playlist.");
        return false;
    }
};

const removeVideoFromPlaylist = async (encodedToken, playlistId, videoId) => {
    try {
        const { data } = await axios.delete(
            `/api/user/playlists/${playlistId}/${videoId}`,
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        return true;
    } catch (error) {
        toast.error("Video can not be removed from playlist.");
        return false;
    }
};

export {
    getPlaylists,
    addPlaylist,
    removePlaylist,
    getPlaylistVideos,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
};
