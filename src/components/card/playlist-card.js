import { React, useEffect } from "react";
import { useState } from "react";
import "./video-card.css";
import "./playlist-card.css";
import { useAuth, usePlaylists } from "../../context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function PlaylistCard({ playlist }) {
    const {
        playlists,
        dispatchPlaylists,
        addPlaylistHandler,
        removePlaylistHandler,
    } = usePlaylists();
    const [showSubmenu, setShowSubmenu] = useState(false);

    const { auth } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        auth.isAuthorized || navigation("/login");
    }, []);

    const toggleShowShubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const removePlaylist = async () => {
        toggleShowShubmenu();
        await removePlaylistHandler(auth.token, dispatchPlaylists, playlist);
    };

    const defaultPlaylistImage = "https://i.imgur.com/wWPBmKO.jpg";

    const playlistImage =
        playlist.videos.length > 0
            ? playlist.videos[0].videoImage
            : defaultPlaylistImage;

    return (
        <div className="card card-badge box-shadow video-card playlist-card">
            <Link
                to="/playlist-video"
                state={{ playlist }}
                className="card-img bg-primary img-overlay"
            >
                <img src={playlistImage} alt="Image" className="" />
                <div className="playlist-image overlay-content">
                    <i className="fas fa-list"></i>
                    <span className="text-m">{playlist.videos.length}</span>
                </div>
            </Link>
            <div className="card-body bg-primary">
                <div className="card-content p-1">
                    <div className="fw-semibold text-s">{playlist.title}</div>
                </div>
                <div className="submenu-btn" onClick={toggleShowShubmenu}>
                    <i className="fas fa-ellipsis-v text-m"></i>
                </div>
            </div>
            {showSubmenu ? (
                <ul className="list-group text-s">
                    <li className="list-item" onClick={removePlaylist}>
                        Delete Playlist
                    </li>
                </ul>
            ) : (
                ""
            )}
        </div>
    );
}

export { PlaylistCard };
