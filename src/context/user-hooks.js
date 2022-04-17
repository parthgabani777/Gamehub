import {
    AuthProvider,
    VideoProvider,
    WatchLaterProvider,
    HistoryProvider,
    LikedVideosProvider,
    PlaylistsProvider,
} from "./";

const UserDataProvider = ({ children }) => {
    return (
        <AuthProvider>
            <VideoProvider>
                <WatchLaterProvider>
                    <HistoryProvider>
                        <LikedVideosProvider>
                            <PlaylistsProvider>{children}</PlaylistsProvider>
                        </LikedVideosProvider>
                    </HistoryProvider>
                </WatchLaterProvider>
            </VideoProvider>
        </AuthProvider>
    );
};

export { UserDataProvider };
