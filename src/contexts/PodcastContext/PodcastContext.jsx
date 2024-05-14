import React, {
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import { audios } from '../../data/audios';
import PodcastReducer from './PodcastReducer';
import { PodcastSetIsPlaying } from './PodcastAction';

const INIT_STATE = {
    isPlaying: false,
    currentAudio: null,
    show: false,
    handleNext: () => {},
    handlePrevious: () => {},
};

export const PodcastContext = createContext(INIT_STATE);

const PodcastContextProvider = ({ children }) => {
    const audioRef = useRef();
    const progressBarRef = useRef();
    const [state, dispatch] = useReducer(PodcastReducer, INIT_STATE);
    const [volume, setVolume] = useState(60);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        playAnimationRef.current = requestAnimationFrame(repeat);
        const currentTime = audioRef.current?.currentTime ?? null;
        setTimeProgress(currentTime);
        if (progressBarRef.current) {
            progressBarRef.current.value = currentTime;
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(progressBarRef.current.value / duration) * 100}%`
            );
        }
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    const handleProgressChange = (e) => {
        audioRef.current.currentTime = progressBarRef.current.value;
        setTimeProgress(e.target.value);
    };

    const onLoadedMetadata = () => {
        // console.log(audioRef.current.duration);
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        if (progressBarRef.current) progressBarRef.current.max = seconds;
        // setIsPlaying(true);
    };

    // useEffect(() => {
    //     if (audioRef) {
    //         audioRef.current.volume = volume / 100;
    //     }
    // }, [volume, audioRef]);

    const onEnded = () => {
        dispatch(PodcastSetIsPlaying(false));
    };

    useEffect(() => {
        if (state.isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [state.isPlaying, audioRef, repeat]);

    return (
        <PodcastContext.Provider
            value={{
                isPlaying: state.isPlaying,
                dispatch,
                currentAudio: state.currentAudio,
                show: state.show,
                audioRef,
                progressBarRef,
                onLoadedMetadata,
                onEnded,
                timeProgress,
                handleProgressChange,
                duration,
                volume,
                setVolume,
            }}
        >
            {children}
        </PodcastContext.Provider>
    );
};

export default PodcastContextProvider;
