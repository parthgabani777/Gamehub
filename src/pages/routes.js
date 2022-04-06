import React from "react";
import { Route, Routes } from "react-router";
import {
    HomePage,
    Videos,
    Playlist,
    Login,
    Signup,
    WatchLater,
    History,
    SingleVideo,
} from "./";

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="homePage" element={<HomePage />} />
            <Route path="videos" element={<Videos />} />
            <Route path="singlevideo" element={<SingleVideo />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="history" element={<History />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="watchlater" element={<WatchLater />} />
        </Routes>
    );
}

export { PageRoutes };
