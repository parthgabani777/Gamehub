import {
    AuthProvider,
    VideoProvider,
    WatchLaterProvider,
    HistoryProvider,
    LikedVideosProvider,
} from "./";

const UserDataProvider = ({ children }) => {
    return (
        <AuthProvider>
            <VideoProvider>
                <WatchLaterProvider>
                    <HistoryProvider>
                        <LikedVideosProvider>{children}</LikedVideosProvider>
                    </HistoryProvider>
                </WatchLaterProvider>
            </VideoProvider>
        </AuthProvider>
    );
};

export { UserDataProvider };
