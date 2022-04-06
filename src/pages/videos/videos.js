import React from "react";
import "./videos.css";
import { VideoCard } from "../../components/card/video-card";
import { useVideos } from "../../context/video-context";

function Videos() {
    const { videos, setVideos } = useVideos();
    return (
        <section className="p-2 bg-primary videos">
            <h1 className="text-l p-2">Watch Now</h1>
            <div className="card-container p-2">
                {videos.map((video) => (
                    <VideoCard video={video} key={video._id} />
                ))}
            </div>
        </section>
    );
}

export { Videos };
