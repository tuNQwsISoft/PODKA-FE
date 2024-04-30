import { PodcastActionType } from './PodcastAction';

export default function PodcastReducer(state, action) {
    switch (action.type) {
        case PodcastActionType.setIsPlaying:
            return {
                ...state,
                isPlaying: action.payload,
                // show: true,
            };
        case PodcastActionType.setShow:
            return {
                ...state,
                show: action.payload,
            };
        case PodcastActionType.closePodcast:
            return {
                ...state,
                isPlaying: false,
                show: false,
            };
        default:
            return state;
    }
}
