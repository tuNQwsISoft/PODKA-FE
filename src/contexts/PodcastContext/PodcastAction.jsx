export const PodcastActionType = {
    setIsPlaying: 'SET_IS_PLAYING',
    setShow: 'SET_SHOW',
    closePodcast: 'CLOSE_PODCAST',
};

export const PodcastSetIsPlaying = (isPlaying) => ({
    type: PodcastActionType.setIsPlaying,
    payload: isPlaying,
});

export const PodcastSetShow = (show) => ({
    type: PodcastActionType.setShow,
    payload: show,
});

export const ClosePodcast = () => ({
    type: PodcastActionType.closePodcast,
});
