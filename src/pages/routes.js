import { React, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import {
    HomePage,
    Videos,
    Playlist,
    Login,
    Signup,
    WatchLater,
    History,
    SingleVideo,
    Likes,
    NotFound,
} from "./";
import { PlaylistVideos } from "./playlist/playlist-videos";

function PageRoutes() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="homePage" element={<HomePage />} />
            <Route path="videos" element={<Videos />} />
            <Route path="singlevideo" element={<SingleVideo />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="history" element={<History />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="playlist-video" element={<PlaylistVideos />} />
            <Route path="watchlater" element={<WatchLater />} />
            <Route path="likes" element={<Likes />} />
        </Routes>
    );
}

export { PageRoutes };
