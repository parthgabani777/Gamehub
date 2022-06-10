import { React, useEffect, useState } from "react";
import "./single-video.css";
import { VideoCard } from "../../components/card/video-card";
import { useLocation, useNavigate } from "react-router";
import { useAuth, useHistory, useLikedVideos, useVideos } from "../../context";
import { findVideo } from "../../utils/utils";
import { PlaylistModal } from "../playlist/playlist-modal";

function SingleVideo() {
    const { videos } = useVideos();
    const { pathname, state } = useLocation();
    const { video } = state;
    const { title, creator, videoUrl, _id: videoId } = video;

    const {
        likedVideos,
        dispatchLikedVideos,
        addToLikedVideosHandler,
        removeFromLikedVideosHandler,
    } = useLikedVideos();
    const { itemInLikedVideos } = likedVideos;

    const navigation = useNavigate();
    const { auth } = useAuth();
    const { isAuthorized, token } = auth;

    const { dispatchHistory, addToHistoryHandler, history } = useHistory();

    const addToLikedVideos = async () => {
        isAuthorized
            ? await addToLikedVideosHandler(token, dispatchLikedVideos, video)
            : navigation("/login");
    };

    const removeFromLikedVideos = async () => {
        isAuthorized &&
            (await removeFromLikedVideosHandler(
                token,
                dispatchLikedVideos,
                video
            ));
    };

    const likesBtn = () => {
        return findVideo(itemInLikedVideos, video) && isAuthorized ? (
            <i
                className="fas fa-thumbs-up active"
                onClick={removeFromLikedVideos}
            ></i>
        ) : (
            <i className="fas fa-thumbs-up" onClick={addToLikedVideos}></i>
        );
    };

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const videoInHistory = history.itemInHistory.some(
            (video) => video._id === videoId
        );

        if (isAuthorized && !videoInHistory) {
            addToHistoryHandler(token, dispatchHistory, video);
        }
    }, [pathname]);

    return (
        <section className="p-2 bg-primary single-video">
            <div className="video-content">
                <iframe
                    src={videoUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="video-frame"
                ></iframe>
                <div className="video-text py-2">
                    <div className="video-title text-m">{title}</div>
                    <div className="video-subsection py-1">
                        <div className="creator-name">{creator}</div>
                        <div className="video-action text-m">
                            {likesBtn()}
                            <i className="fas fa-clock"></i>
                            <i
                                className="fas fa-list"
                                onClick={() => setShowModal(!showModal)}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommended-video">
                <p className="text-m py-2 recommended-title">
                    Recommended Videos
                </p>
                <div className="card-container">
                    {videos.map(
                        (video, index) =>
                            index < 6 && (
                                <VideoCard video={video} key={video._id} />
                            )
                    )}
                </div>
            </div>

            {showModal ? (
                <PlaylistModal video={video} modalToggler={setShowModal} />
            ) : (
                ""
            )}
        </section>
    );
}

export { SingleVideo };
