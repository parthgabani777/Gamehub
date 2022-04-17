import { findPlaylist, findVideo, getVideosFromPlaylist } from "../utils/utils";
import { playlistConstant } from "./reducerConstant";

const playlistReducer = (state, action) => {
    const { itemInPlaylists } = state;
    const { playlist } = action.payload ?? {};
    const { _id } = playlist ?? {};

    switch (action.type) {
        case playlistConstant.ADD_PLAYLIST:
            const { playlistData } = action.payload;
            const { _id: playlistId } = playlistData.find(
                (item) =>
                    !itemInPlaylists.find((item2) => item._id === item2._id)
            );
            const isItemInPlaylist = findPlaylist(itemInPlaylists, playlist);
            return isItemInPlaylist
                ? state
                : {
                      ...state,
                      itemInPlaylists: itemInPlaylists.concat({
                          _id: playlistId,
                          ...playlist,
                          videos: [],
                      }),
                  };

        case playlistConstant.REMOVE_PLAYLIST:
            return {
                ...state,
                itemInPlaylists: itemInPlaylists.filter(
                    (item) => item._id !== _id
                ),
            };

        case playlistConstant.SET_PLAYLIST:
            return {
                itemInPlaylists: action.payload,
            };

        case playlistConstant.RESET_PLAYLIST:
            return {
                itemInPlaylists: [],
            };

        case playlistConstant.ADD_VIDEO_TO_PLAYLIST:
            const videosInPlaylist = getVideosFromPlaylist(
                itemInPlaylists,
                _id
            );
            const isVideoInPlaylist = findVideo(
                videosInPlaylist,
                action.payload.video
            );

            return isVideoInPlaylist
                ? state
                : {
                      ...state,
                      itemInPlaylists: itemInPlaylists.map((playlist) =>
                          playlist._id === _id
                              ? {
                                    ...playlist,
                                    videos: playlist.videos.concat(
                                        action.payload.video
                                    ),
                                }
                              : playlist
                      ),
                  };

        case playlistConstant.REMOVE_VIDEO_FROM_PLAYLIST:
            return {
                ...state,
                itemInPlaylists: itemInPlaylists.map((playlist) =>
                    playlist._id === _id
                        ? {
                              ...playlist,
                              videos: playlist.videos.filter(
                                  (video) =>
                                      video.id !== action.payload.video.id
                              ),
                          }
                        : playlist
                ),
            };
    }
};

export { playlistReducer };
