import { React, useEffect, useState } from "react";
import "./playlist.css";
import { PlaylistCard } from "../../components/card/playlist-card";
import { useAuth, usePlaylists } from "../../context";
import { useNavigate } from "react-router";

function Playlist() {
    const { playlists, dispatchPlaylists, addPlaylistHandler } = usePlaylists();
    const { itemInPlaylists } = playlists;
    const navigation = useNavigate();

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

    useEffect(() => {
        auth.isAuthorized || navigation("/login");
    }, []);

    const addPlaylist = async () => {
        setAddPlaylistValue(defaultAddPlaylistValue);
        addPlaylistValue.title != "" &&
            (await addPlaylistHandler(
                token,
                dispatchPlaylists,
                addPlaylistValue
            ));
        setShowAddPlaylist(false);
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

            {itemInPlaylists.length === 0 ? (
                <span className="p-2 text-m text-light-text">
                    No playlist created yet
                </span>
            ) : (
                <div className="card-container p-2">
                    {itemInPlaylists.map((playlist) => (
                        <PlaylistCard playlist={playlist} key={playlist._id} />
                    ))}
                </div>
            )}
        </section>
    );
}

export { Playlist };
