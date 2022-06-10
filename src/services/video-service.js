import axios from "axios";
import { toast } from "react-toastify";

const getVideos = async () => {
    try {
        const { data } = await axios.get("/api/videos");
        return data;
    } catch (error) {
        toast.error("Can not get videos.");
    }
};

export { getVideos };
