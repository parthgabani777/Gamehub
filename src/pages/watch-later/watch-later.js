import React from "react";
import "./watch-later.css";
import { VideoCard } from "../../components/card/video-card";
import { ActionVideoCard } from "../../components/card/action-video-card";

function WatchLater() {
    return (
        <section className="p-2 bg-primary watch-later">
            <h1 className="text-l p-2">Watch Later</h1>
            <div className="card-container p-2">
                <ActionVideoCard />
                <ActionVideoCard />
                <ActionVideoCard />
                <ActionVideoCard />
            </div>
        </section>
    );
}

export { WatchLater };
