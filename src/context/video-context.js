import { createContext, useContext, useState, useEffect } from "react";
import { getVideos } from "../services/video-service";

const defaultVideoValue = [];

const videoContext = createContext();

const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState(defaultVideoValue);

    useEffect(async () => {
        const data = await getVideos();
        setVideos(data.videos);
    }, []);

    return (
        <videoContext.Provider value={{ videos, setVideos }}>
            {children}
        </videoContext.Provider>
    );
};

export { VideoProvider, useVideos };
