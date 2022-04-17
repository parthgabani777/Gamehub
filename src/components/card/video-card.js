import { React, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth, useHistory, useWatchLater } from "../../context";
import { findVideo } from "../../utils/utils";
import "./video-card.css";

function VideoCard({ video }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const { title, creator, videoImage } = video;

    const {
        watchLater,
        dispatchWatchLater,
        addToWatchLaterHandler,
        removeFromWatchLaterHandler,
    } = useWatchLater();
    const { itemInWatchLater } = watchLater;

    const navigation = useNavigate();
    const { auth } = useAuth();
    const { isAuthorized, token } = auth;

    const { history, dispatchHistory, addToHistoryHandler } = useHistory();
    const { itemInHistory } = history;
    const addToHistory = async () => {
        isAuthorized
            ? findVideo(itemInHistory, video) ||
              (await addToHistoryHandler(token, dispatchHistory, video))
            : null;
    };

    const toggleShowShubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const addToWatchLater = async () => {
        toggleShowShubmenu();
        isAuthorized
            ? await addToWatchLaterHandler(token, dispatchWatchLater, video)
            : navigation("/login");
    };

    const removeFromWatchLater = async () => {
        toggleShowShubmenu();
        isAuthorized &&
            (await removeFromWatchLaterHandler(
                token,
                dispatchWatchLater,
                video
            ));
    };

    const watchLaterBtn = () => {
        return findVideo(itemInWatchLater, video) && isAuthorized ? (
            <li className="list-item" onClick={removeFromWatchLater}>
                Remove From watch later
            </li>
        ) : (
            <li className="list-item" onClick={addToWatchLater}>
                Add to watch later
            </li>
        );
    };

    return (
        <div className="card card-badge box-shadow video-card">
            <Link
                to="/singlevideo"
                state={{ video }}
                onClick={addToHistory}
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
                <ul className="list-group text-s">{watchLaterBtn()}</ul>
            )}
        </div>
    );
}

export { VideoCard };
