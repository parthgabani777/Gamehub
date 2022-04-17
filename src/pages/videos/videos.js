import React from "react";
import "./videos.css";
import { VideoCard } from "../../components/card/video-card";
import { useVideos } from "../../context/video-context";
import { useLocation } from "react-router";

function Videos() {
    const { videos, setVideos } = useVideos();
    const { state: category } = useLocation();

    const filterByCategory = (videos, categoryName) => {
        return videos.filter((video) => video.categoryName === categoryName);
    };

    const videosTemp = category && filterByCategory(videos, category);
    const filteredVideos = videosTemp ?? videos;

    return (
        <section className="p-2 bg-primary videos">
            <h1 className="text-l p-2">Watch Now</h1>
            <div className="card-container p-2">
                {filteredVideos.map((video) => (
                    <VideoCard video={video} key={video._id} />
                ))}
            </div>
        </section>
    );
}

export { Videos };
