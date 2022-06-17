import { React, useEffect } from "react";
import "./watch-later.css";
import { ActionVideoCard } from "../../components/card/action-video-card";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router";
import { useWatchLater } from "../../context";

function WatchLater() {
    const { watchLater, dispatchWatchLater, removeFromWatchLaterHandler } =
        useWatchLater();
    const { itemInWatchLater } = watchLater;

    const { auth } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        auth.isAuthorized || navigation("/login");
    }, []);

    return (
        <section className="p-2 bg-primary watch-later">
            <h1 className="text-l p-2">
                Watch Later ({itemInWatchLater.length})
            </h1>
            {itemInWatchLater.length === 0 ? (
                <span className="p-2 text-m text-light-text">
                    No videos in watch later
                </span>
            ) : (
                <div className="card-container p-2">
                    {itemInWatchLater.map((video) => (
                        <ActionVideoCard
                            video={video}
                            key={video._id}
                            dispatcher={dispatchWatchLater}
                            removeHandler={removeFromWatchLaterHandler}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export { WatchLater };
