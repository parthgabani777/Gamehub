import { createContext, useContext, useReducer, useEffect } from "react";
import { playlistReducer } from "../reducer/playlistReducer";
import { useAuth } from "./auth-context";
import {
    getPlaylistsHandler,
    addPlaylistHandler,
    removePlaylistHandler,
    resetPlaylistsHandler,
    getPlaylistVideosHandler,
    addVideoToPlaylistHandler,
    removeVideoFromPlaylistHandler,
} from "../utils/playlist/playlist-utils";

const defaultPlaylistsValue = {
    itemInPlaylists: [],
};

const playlistsContext = createContext();

const usePlaylists = () => useContext(playlistsContext);

const PlaylistsProvider = ({ children }) => {
    const [playlists, dispatchPlaylists] = useReducer(
        playlistReducer,
        defaultPlaylistsValue
    );

    const { auth } = useAuth();

    useEffect(() => {
        auth.isAuthorized && getPlaylistsHandler(auth.token, dispatchPlaylists);
    }, []);

    return (
        <playlistsContext.Provider
            value={{
                playlists,
                dispatchPlaylists,
                getPlaylistsHandler,
                addPlaylistHandler,
                removePlaylistHandler,
                resetPlaylistsHandler,
                getPlaylistVideosHandler,
                addVideoToPlaylistHandler,
                removeVideoFromPlaylistHandler,
            }}
        >
            {children}
        </playlistsContext.Provider>
    );
};

export { PlaylistsProvider, usePlaylists };
