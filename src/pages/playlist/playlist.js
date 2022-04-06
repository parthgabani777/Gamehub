import React from "react";
import "./playlist.css";
import {} from "../../components/card/video-card";
import { PlaylistCard } from "../../components/card/playlist-card";

function Playlist() {
    return (
        <section className="p-2 bg-primary watch-later">
            <h1 className="text-l p-2">Playlist</h1>
            <div className="card-container p-2">
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </section>
    );
}

export { Playlist };
