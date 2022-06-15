import {
    getPlaylists,
    addPlaylist,
    removePlaylist,
    getPlaylistVideos,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
} from "../../services/playlist-service";
import { playlistConstant } from "../../reducer/reducerConstant";
import { v4 as uuid } from "uuid";

const getPlaylistsHandler = async (encodedToken, dispatchWishlist) => {
    const { playlists } = (await getPlaylists(encodedToken)) ?? {
        playlists: [],
    };
    dispatchWishlist({
        type: playlistConstant.SET_PLAYLIST,
        payload: playlists,
    });
};

const addPlaylistHandler = async (
    encodedToken,
    dispatchPlaylists,
    playlist
) => {
    const playlistData = await addPlaylist(encodedToken, playlist);
    dispatchPlaylists({
        type: playlistConstant.ADD_PLAYLIST,
        payload: { playlist, playlistData },
    });
};

const removePlaylistHandler = async (
    encodedToken,
    dispatchPlaylists,
    playlist
) => {
    (await removePlaylist(encodedToken, playlist._id)) &&
        dispatchPlaylists({
            type: playlistConstant.REMOVE_PLAYLIST,
            payload: { playlist },
        });
};

const resetPlaylistsHandler = () => {
    dispatchPlaylists({
        type: playlistConstant.RESET_PLAYLIST,
    });
};

const getPlaylistVideosHandler = async (encodedToken, dispatchPlaylists) => {
    const { playlists } = (await getPlaylistVideos(encodedToken)) ?? {
        playlists: [],
    };
    dispatchPlaylists({
        type: playlistConstant.GET_PLAYLIST_VIDEOS,
        payload: playlists,
    });
};

const addVideoToPlaylistHandler = async (
    encodedToken,
    dispatchPlaylists,
    video,
    playlist
) => {
    (await addVideoToPlaylist(encodedToken, playlist._id, video)) &&
        dispatchPlaylists({
            type: playlistConstant.ADD_VIDEO_TO_PLAYLIST,
            payload: { video, playlist },
        });
};

const removeVideoFromPlaylistHandler = async (
    encodedToken,
    dispatchPlaylists,
    video,
    playlist
) => {
    const isRemoved = await removeVideoFromPlaylist(
        encodedToken,
        playlist._id,
        video._id
    );
    isRemoved &&
        dispatchPlaylists({
            type: playlistConstant.REMOVE_VIDEO_FROM_PLAYLIST,
            payload: { video, playlist },
        });
};

export {
    getPlaylistsHandler,
    addPlaylistHandler,
    removePlaylistHandler,
    resetPlaylistsHandler,
    getPlaylistVideosHandler,
    addVideoToPlaylistHandler,
    removeVideoFromPlaylistHandler,
};
