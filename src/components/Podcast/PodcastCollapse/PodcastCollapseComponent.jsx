import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import ReactDOM from 'react-dom';
import {
    IconClose,
    IconPause,
    IconPlay,
    IconPlayBack,
    IconPlayForward,
    IconVolume,
    IconWaves,
} from '../../../icons';
import { formatTime } from '../../../utils/DateTimeUtil';
import { PodcastContext } from '../../../contexts/PodcastContext/PodcastContext';
import {
    ClosePodcast,
    PodcastSetIsPlaying,
} from '../../../contexts/PodcastContext/PodcastAction';
import './styles.css';

const PodcastCollapseComponent = () => {
    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);
    const progressBarRef = useRef();
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const playAnimationRef = useRef();

    const { isPlaying, audioRef, dispatch, currentAudio } =
        useContext(PodcastContext);

    const setIsPlaying = (isPlaying) => {
        dispatch(PodcastSetIsPlaying(isPlaying));
    };

    const handleNext = () => {};

    const handlePrevious = () => {};

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

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume, audioRef]);

    const handleProgressChange = (e) => {
        console.log(progressBarRef.current.value);
        audioRef.current.currentTime = progressBarRef.current.value;
        setTimeProgress(e.target.value);
    };

    const onLoadedMetadata = () => {
        // console.log(audioRef.current.duration);
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
        // setIsPlaying(true);
    };

    const onEnded = () => {
        setIsPlaying(false);
        handleNext();
    };

    const handleClose = () => {
        dispatch(ClosePodcast());
    };

    return ReactDOM.createPortal(
        <div className="w-full absolute bottom-0 shadow-md">
            <audio
                src={currentAudio?.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
            <button className="absolute right-4" onClick={handleClose}>
                <IconClose width={'1.5rem'} height={'1.5rem'} fill="white" />
            </button>
            <div className="podcast-collapse grid gap-4 bg-[#171717]">
                <img
                    className="w-20 h-20"
                    src={
                        currentAudio?.thumbnailSrc ??
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz11dZWlpNuX0pRGqi74aAaKQmG0bw3wokBWsPCsVGBA&s'
                    }
                    alt="thumbnail"
                />
                <div className="podcast-info flex flex-col gap-2 justify-center items-center columns-xs">
                    <span>{currentAudio.title}</span>
                    <a className="opacity-30" href="" title="creator">
                        {currentAudio.creator}
                    </a>
                </div>

                <div className="control flex justify-center items-center gap-6">
                    <button onClick={handlePrevious}>
                        <IconPlayBack
                            width={'1.5rem'}
                            height={'1.5rem'}
                            color="white"
                        />
                    </button>
                    <button
                        className="rounded-full bg-[#3D5CFF] w-[2.5rem] h-[2.5rem] flex justify-center items-center"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? (
                            <IconPause
                                width={'2rem'}
                                height={'2rem'}
                                color="white"
                            />
                        ) : (
                            <IconPlay
                                width={'2rem'}
                                height={'2rem'}
                                color="white"
                            />
                        )}
                    </button>
                    <button onClick={handleNext}>
                        <IconPlayForward
                            width={'1.5rem'}
                            height={'1.5rem'}
                            color="white"
                        />
                    </button>
                </div>
                <div className="progress flex items-center gap-2 flex-auto">
                    <span className="time current">
                        {formatTime(timeProgress)}
                    </span>
                    <input
                        title="audio-timespan-collapse"
                        type="range"
                        defaultValue="0"
                        ref={progressBarRef}
                        onChange={handleProgressChange}
                    />
                    <span className="time">{formatTime(duration)}</span>
                </div>
                <div className="volume flex items-center justify-center gap-2 pr-4">
                    <button>
                        <IconVolume
                            width={'1.5rem'}
                            height={'1.5rem'}
                            color="white"
                        />
                    </button>
                    <input
                        title="volume-range"
                        placeholder="60%"
                        style={{
                            background: `linear-gradient(to right, #ffffff ${volume}%, #5a5a5a ${volume}%)`,
                        }}
                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PodcastCollapseComponent;
