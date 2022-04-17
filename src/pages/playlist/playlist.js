import { React, useState } from "react";
import "./playlist.css";
import { PlaylistCard } from "../../components/card/playlist-card";
import { useAuth, usePlaylists } from "../../context";

function Playlist() {
    const { playlists, dispatchPlaylists, addPlaylistHandler } = usePlaylists();
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
        setAddPlaylistValue(defaultAddPlaylistValue);
        addPlaylistValue.title != "" &&
            (await addPlaylistHandler(
                token,
                dispatchPlaylists,
                addPlaylistValue
            ));
    };

    return (
        <section className="p-2 bg-primary playlist">
            <div className="heading">
                <h1 className="text-l p-2">
                    Playlist ({itemInPlaylists.length})
                </h1>
                <button
                    className="add-playlist-btn btn btn-light br-1 text-s"
                    onClick={() => setShowAddPlaylist(!showAddPlaylist)}
                >
                    Add Playlist
                </button>
            </div>

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

            <div className="card-container p-2">
                {itemInPlaylists.map((playlist) => (
                    <PlaylistCard playlist={playlist} key={playlist._id} />
                ))}
            </div>
        </section>
    );
}

export { Playlist };
