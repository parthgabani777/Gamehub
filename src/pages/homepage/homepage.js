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

            <section className="category bg-primary">
                <p className="text-l fw-bold text-center p-2">
                    Search By Category
                </p>
                <div className="category-container">
                    <Link
                        to="/videos"
                        state="Valorant"
                        className="category-card text-l box-shadow card-valorant"
                    >
                        <p>Valorant</p>
                    </Link>
                    <Link
                        to="/videos"
                        state="Counter-Strike: Global Offensive"
                        className="category-card text-l box-shadow card-csgo"
                    >
                        <p>CS: go</p>
                    </Link>
                    <Link
                        to="/videos"
                        state="Fortnite"
                        className="category-card text-l box-shadow card-fortnite"
                    >
                        <p>Fortnite</p>
                    </Link>
                    <Link
                        to="/videos"
                        state="Apex Legends"
                        className="category-card text-l box-shadow card-apex"
                    >
                        <p>Apex Legends</p>
                    </Link>
                </div>
            </section>

            <section className="p-2 bg-primary">
                <h1 className="text-l trending-title p-2">Trending Videos</h1>
                <div className="card-container p-2">
                    {videos.map(
                        (video, index) =>
                            index < 3 && (
                                <VideoCard video={video} key={video._id} />
                            )
                    )}
                </div>
            </section>
        </main>
    );
}

export { HomePage };
