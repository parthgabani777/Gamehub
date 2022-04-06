import React from "react";
import "./playlist.css";
import { VideoCard } from "../../components/card/video-card";

function PlaylistVideos() {
    return (
        <section className="p-2 bg-primary watch-later">
            <h1 className="text-l p-2">Playlist</h1>
            <div className="card-container p-2">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </section>
    );
}

export { PlaylistVideos };
