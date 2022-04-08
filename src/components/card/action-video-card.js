import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./video-card.css";

function ActionVideoCard({ video, dispatcher, removeHandler }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const { title, creator, videoImage } = video;
    const { auth } = useAuth();

    const toggleShowShubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const removeVideo = async () => {
        toggleShowShubmenu();
        await removeHandler(auth.token, dispatcher, video);
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
                    <li className="list-item" onClick={removeVideo}>
                        Remove
                    </li>
                </ul>
            )}
        </div>
    );
}

export { ActionVideoCard };
