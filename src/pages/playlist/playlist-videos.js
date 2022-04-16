import React from "react";
import "./playlist.css";
import { PlaylistVideoCard } from "../../components/card/playlist-video-card";
import { useAuth, usePlaylists } from "../../context";
import { useLocation, useNavigate } from "react-router";
import { findPlaylist } from "../../utils/utils";

function PlaylistVideos() {
    const { state } = useLocation();
    const { playlist } = state;

    const { playlists } = usePlaylists();
    const { itemInPlaylists } = playlists;

    const playlistInfo = findPlaylist(itemInPlaylists, playlist);
    const { title, description, videos } = playlistInfo;

    return (
        <section className="p-2 bg-primary watch-later">
            <h1 className="text-l p-2">
                {title} ({videos.length})
            </h1>
            <div className="card-container p-2">
                {videos.map((video) => (
                    <PlaylistVideoCard
                        video={video}
                        playlist={playlistInfo}
                        key={video._id}
                    />
                ))}
            </div>
        </section>
    );
}

export { PlaylistVideos };
