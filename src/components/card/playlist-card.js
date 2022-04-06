import React from "react";
import { useState } from "react";
import "./video-card.css";
import "./playlist-card.css";

function PlaylistCard() {
    const [showSubmenu, setShowSubmenu] = useState(false);

    return (
        <div className="card card-badge box-shadow video-card playlist-card">
            <div className="card-img bg-primary img-overlay">
                <img src="https://picsum.photos/id/132/300/200" alt="Image" />
                <div className="playlist-image overlay-content">
                    <i className="fas fa-list"></i>
                    <span className="text-m">10</span>
                </div>
            </div>
            <div className="card-body bg-primary">
                <div className="card-content p-1">
                    <div className="fw-semibold text-s">
                        Can You Actually Game in 8K? (RTX 3090 Gameplay!)
                    </div>
                    <div className="fw-bold text-s creator-name">John doe</div>
                </div>
                <div
                    className="submenu-btn"
                    onClick={() => {
                        setShowSubmenu(!showSubmenu);
                    }}
                >
                    <i className="fas fa-ellipsis-v text-m"></i>
                </div>
            </div>
            {showSubmenu ? (
                <ul className="list-group text-s">
                    <li className="list-item">Delete Playlist</li>
                </ul>
            ) : (
                ""
            )}
        </div>
    );
}

export { PlaylistCard };
