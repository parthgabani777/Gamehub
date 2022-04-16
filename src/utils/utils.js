const findVideo = (videos, video) => {
    return videos.find((item) => item.id === video.id);
};

const findPlaylist = (playlists, playlist) => {
    return playlists.find((item) => item._id === playlist._id);
};

const getVideosFromPlaylist = (playlists, id) => {
    const playlist = playlists.find((item) => item._id === id);
    return playlist.videos;
};

export { findVideo, findPlaylist, getVideosFromPlaylist };
