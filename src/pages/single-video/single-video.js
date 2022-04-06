import React from "react";
import "./single-video.css";
import { VideoCard } from "../../components/card/video-card";
import { useVideos } from "../../context/video-context";
import { useLocation } from "react-router";

function SingleVideo() {
    const { videos, setVideos } = useVideos();
    const location = useLocation();
    const { video } = location.state;

    return (
        <section className="p-2 bg-primary single-video">
            <div className="video-content">
                <iframe
                    src={video.videoUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="video-frame"
                ></iframe>
                <div className="video-text py-2">
                    <div className="video-title text-m">{video.title}</div>
                    <div className="video-subsection py-1">
                        <div className="creator-name">{video.creator}</div>
                        <div className="video-action text-m">
                            <i className="fas fa-thumbs-up"></i>
                            <i className="fas fa-thumbs-down"></i>
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
