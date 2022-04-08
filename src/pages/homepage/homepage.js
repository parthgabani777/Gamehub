import React from "react";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components/card/video-card";
import { useVideos } from "../../context/video-context";
import "./homepage.css";

function HomePage() {
    const { videos, setVideos } = useVideos();

    return (
        <main className="homepage">
            <section className="landing text-l">
                <div className="landing-content">
                    <p className="fw-bold text-white text-center">
                        Explore 100+ Gaming Videos and watched video you liked
                    </p>
                    <Link
                        to="/videos"
                        className="btn btn-primary br-3 landing-btn"
                    >
                        Watch Now
                    </Link>
                </div>
            </section>

            <section className="p-2 bg-primary">
                <h1 className="text-l trending-title p-2">Trending Videos</h1>
                <div className="card-container p-2">
                    {videos.map((video) => (
                        <VideoCard video={video} key={video._id} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export { HomePage };
