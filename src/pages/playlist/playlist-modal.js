import { useState } from "react";
import { useAuth, usePlaylists } from "../../context";
import { findVideo, getVideosFromPlaylist } from "../../utils/utils";
import "./playlist-modal.css";

function PlaylistModal({ video, modalToggler }) {
    const {
        playlists,
        dispatchPlaylists,
        addPlaylistHandler,
        addVideoToPlaylistHandler,
        removeVideoFromPlaylistHandler,
    } = usePlaylists();
    const { itemInPlaylists } = playlists;
    const { auth } = useAuth();
    const { token } = auth;

    const defaultAddPlaylistValue = {
        title: "",
        description: "",
    };

    const [addPlaylistValue, setAddPlaylistValue] = useState(
        defaultAddPlaylistValue
    );

    const [showAddPlaylist, setShowAddPlaylist] = useState(false);

    const addPlaylist = async () => {
        addPlaylistValue.title != "" &&
            (await addPlaylistHandler(
                token,
                dispatchPlaylists,
                addPlaylistValue
            ));
        setAddPlaylistValue(defaultAddPlaylistValue);
    };

    const isVideoInPlaylist = (videos, video) => {
        return findVideo(videos, video) && true;
    };

    const addOrRemoveVideoHandler = (playlist, video) => {
        return isVideoInPlaylist(playlist.videos, video)
            ? removeVideoFromPlaylistHandler(
                  auth.token,
                  dispatchPlaylists,
                  video,
                  playlist
              )
            : addVideoToPlaylistHandler(
                  auth.token,
                  dispatchPlaylists,
                  video,
                  playlist
              );
    };

    return (
        <div className="modal text-s">
            <div className="modal-content bg-primary p-2">
                <span className="close" onClick={() => modalToggler(false)}>
                    &times;
                </span>
                <div className="playlist-item list-group">
                    {itemInPlaylists.map((playlist) => (
                        <li
                            className="list-item list-stacked"
                            key={playlist._id}
                        >
                            <input
                                type="checkbox"
                                checked={isVideoInPlaylist(
                                    playlist.videos,
                                    video
                                )}
                                className="text-s playlist-checkbox"
                                id={playlist._id}
                                onChange={async () => {
                                    await addOrRemoveVideoHandler(
                                        playlist,
                                        video
                                    );
                                }}
                            />
                            <label htmlFor={playlist._id}>
                                {playlist.title}
                            </label>
                        </li>
                    ))}
                </div>
                <button
                    className="btn btn-light"
                    onClick={() => setShowAddPlaylist(!showAddPlaylist)}
                >
                    Create New
                </button>
                {showAddPlaylist ? (
                    <div className="add-playlist">
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="text-s"
                            value={addPlaylistValue.title}
                            onChange={(e) =>
                                setAddPlaylistValue({
                                    ...addPlaylistValue,
                                    title: e.target.value,
                                })
                            }
                        />
                        <button
                            className="add-playlist-btn btn btn-light text-s"
                            onClick={addPlaylist}
                        >
                            Add
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export { PlaylistModal };
