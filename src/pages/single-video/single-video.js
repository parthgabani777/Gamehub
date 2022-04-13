import { React, useEffect } from "react";
import "./single-video.css";
import { VideoCard } from "../../components/card/video-card";
import { useLocation, useNavigate } from "react-router";
import { useAuth, useHistory, useLikedVideos, useVideos } from "../../context";
import { findVideo } from "../../utils/utils";

function SingleVideo() {
    const { videos } = useVideos();
    const { pathname, state } = useLocation();
    const { video } = state;
    const { title, creator, videoUrl } = video;

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

    const { dispatchHistory, addToHistoryHandler } = useHistory();
    isAuthorized && addToHistoryHandler(token, dispatchHistory, video);

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

    useEffect(() => {
        window.scrollTo(0, 0);
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
                            <i className="fas fa-list"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommended-video">
                <div className="card-container">
                    <p className="text-m">Recommended Videos</p>
                    {videos.map((video) => (
                        <VideoCard video={video} key={video._id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export { SingleVideo };
