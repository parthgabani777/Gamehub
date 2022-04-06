import React from "react";
import "./history.css";
import { ActionVideoCard } from "../../components/card/action-video-card";

function History() {
    return (
        <section className="p-2 bg-primary history">
            <h1 className="text-l p-2">History</h1>
            <div className="card-container p-2">
                <ActionVideoCard />
                <ActionVideoCard />
                <ActionVideoCard />
                <ActionVideoCard />
            </div>
        </section>
    );
}

export { History };
