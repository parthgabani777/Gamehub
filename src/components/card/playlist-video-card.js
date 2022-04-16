import { React, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth, usePlaylists } from "../../context";
import { findVideo } from "../../utils/utils";
import "./video-card.css";

function PlaylistVideoCard({ video, playlist }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const { title, creator, videoImage } = video;

    const { dispatchPlaylists, removeVideoFromPlaylistHandler } =
        usePlaylists();

    const { auth } = useAuth();
    const { token } = auth;

    const toggleShowShubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const removeVideoFromPlaylist = async () => {
        toggleShowShubmenu();
        await removeVideoFromPlaylistHandler(
            token,
            dispatchPlaylists,
            video,
            playlist
        );
    };

    return (
        <div className="card card-badge box-shadow video-card">
            <Link
                to="/singlevideo"
                state={{ video }}
                className="card-img bg-primary"
            >
                <img src={videoImage} alt={title} />
            </Link>
            <div className="card-body bg-primary">
                <div className="card-content p-1">
                    <div className="fw-semibold text-s">{title}</div>
                    <div className="fw-bold text-s creator-name">{creator}</div>
                </div>
                <div className="submenu-btn" onClick={toggleShowShubmenu}>
                    <i className="fas fa-ellipsis-v text-m"></i>
                </div>
            </div>
            {showSubmenu && (
                <ul className="list-group text-s">
                    <li className="list-item" onClick={removeVideoFromPlaylist}>
                        Remove
                    </li>
                </ul>
            )}
        </div>
    );
}

export { PlaylistVideoCard };
