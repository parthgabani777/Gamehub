import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./video-card.css";

function VideoCard({ video }) {
    const [showSubmenu, setShowSubmenu] = useState(false);

    return (
        <Link
            to="/singlevideo"
            state={{ video }}
            className="card card-badge box-shadow video-card"
        >
            <div className="card-img bg-primary">
                <img src={video.videoImage} alt="Image" />
            </div>
            <div className="card-body bg-primary">
                <div className="card-content p-1">
                    <div className="fw-semibold text-s">{video.title}</div>
                    <div className="fw-bold text-s creator-name">
                        {video.creator}
                    </div>
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
                    <li className="list-item">Add to watch later</li>
                    <li className="list-item">Add to playlist</li>
                </ul>
            ) : (
                ""
            )}
        </Link>
    );
}

export { VideoCard };
