import { React, useEffect } from "react";
import "./history.css";
import { ActionVideoCard } from "../../components/card/action-video-card";
import { useAuth, useHistory } from "../../context";
import { useNavigate } from "react-router";

function History() {
    const {
        history,
        dispatchHistory,
        removeFromHistoryHandler,
        clearHistoryHandler,
    } = useHistory();
    const { itemInHistory } = history;

    const { auth } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        auth.isAuthorized || navigation("/login");
    }, []);

    return (
        <section className="p-2 bg-primary history">
            <div className="heading">
                <h1 className="text-l p-2">History ({itemInHistory.length})</h1>
                <button
                    className="clear-history-btn btn btn-light br-1 text-s"
                    onClick={() =>
                        clearHistoryHandler(auth.token, dispatchHistory)
                    }
                >
                    Clear History
                </button>
            </div>

            <div className="card-container p-2">
                {itemInHistory.map((video) => (
                    <ActionVideoCard
                        video={video}
                        key={video._id}
                        dispatcher={dispatchHistory}
                        removeHandler={removeFromHistoryHandler}
                    />
                ))}
            </div>
        </section>
    );
}

export { History };
