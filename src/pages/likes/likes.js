import { React, useEffect } from "react";
import "./likes.css";
import { useNavigate } from "react-router";
import { ActionVideoCard } from "../../components/card/action-video-card";
import { useAuth, useLikedVideos } from "../../context";

function Likes() {
    const { likedVideos, dispatchLikedVideos, removeFromLikedVideosHandler } =
        useLikedVideos();
    const { itemInLikedVideos } = likedVideos;

    const { auth } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        auth.isAuthorized || navigation("/login");
    }, []);

    return (
        <section className="p-2 bg-primary likes">
            <h1 className="text-l p-2">
                Liked Videos ({itemInLikedVideos.length})
            </h1>
            {itemInLikedVideos.length === 0 ? (
                <span className="p-2 text-m text-light-text">
                    No liked video
                </span>
            ) : (
                <div className="card-container p-2">
                    {itemInLikedVideos.map((video) => (
                        <ActionVideoCard
                            video={video}
                            key={video._id}
                            dispatcher={dispatchLikedVideos}
                            removeHandler={removeFromLikedVideosHandler}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export { Likes };
