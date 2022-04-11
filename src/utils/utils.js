const findVideo = (videos, video) => {
    return videos.find((item) => item.id === video.id);
};

export { findVideo };
