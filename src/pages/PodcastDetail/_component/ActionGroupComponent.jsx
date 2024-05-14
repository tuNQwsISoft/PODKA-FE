import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    IconPause,
    IconPlay,
    IconPlayBack,
    IconPlayForward,
    IconVolume,
    IconWaves,
} from '../../../icons';
import { formatTime } from '../../../utils/DateTimeUtil';

const ActionGroupComponent = ({
    isPlaying,
    setIsPlaying = false,
    currentAudio,
    setCurrentAudio,
    handleNext,
    handlePrevious,
    audioRef,
    onLoadedMetadata,
    onEnded,
    timeProgress,
    progressBarRef,
    handleProgressChange,
    duration,
    volume,
    setVolume,
}) => {
    // const [volume, setVolume] = useState(60);
    // const [muteVolume, setMuteVolume] = useState(false);
    // // const audioRef = useRef();
    // const progressBarRef = useRef();
    // const [timeProgress, setTimeProgress] = useState(0);
    // const [duration, setDuration] = useState(0);
    // const playAnimationRef = useRef();

    // const repeat = useCallback(() => {
    //     playAnimationRef.current = requestAnimationFrame(repeat);
    //     const currentTime = audioRef.current?.currentTime ?? null;
    //     setTimeProgress(currentTime);
    //     if (progressBarRef.current) {
    //         progressBarRef.current.value = currentTime;
    //         progressBarRef.current.style.setProperty(
    //             '--range-progress',
    //             `${(progressBarRef.current.value / duration) * 100}%`
    //         );
    //     }
    // }, [audioRef, duration, progressBarRef, setTimeProgress]);

    // useEffect(() => {
    //     if (isPlaying) {
    //         audioRef.current?.play();
    //     } else {
    //         audioRef.current?.pause();
    //     }
    //     playAnimationRef.current = requestAnimationFrame(repeat);
    // }, [isPlaying, audioRef, repeat]);

    // useEffect(() => {
    //     if (audioRef) {
    //         audioRef.current.volume = volume / 100;
    //     }
    // }, [volume, audioRef]);

    // const handleProgressChange = (e) => {
    //     console.log(progressBarRef.current.value);
    //     audioRef.current.currentTime = progressBarRef.current.value;
    //     setTimeProgress(e.target.value);
    // };

    // const onLoadedMetadata = () => {
    //     // console.log(audioRef.current.duration);
    //     const seconds = audioRef.current.duration;
    //     setDuration(seconds);
    //     progressBarRef.current.max = seconds;
    //     // setIsPlaying(true);
    // };

    // const onEnded = () => {
    //     setIsPlaying(false);
    //     handleNext();
    // };

    return (
        <div className="action-group flex flex-col justify-center gap-4">
            <audio
                src={currentAudio.podcast}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
            <div className="progress flex items-center gap-2">
                <span className="time current">{formatTime(timeProgress)}</span>
                <input
                    title="audio-timespan"
                    type="range"
                    defaultValue="0"
                    ref={progressBarRef}
                    onChange={handleProgressChange}
                />
                <span className="time">{formatTime(duration)}</span>
            </div>
            <div className="controls-wrapper grid grid-cols-3 w-full">
                <div className="flex justify-start">
                    <button className="rounded-full bg-[#3D5CFF] px-4">
                        <IconWaves
                            width={'1.5rem'}
                            height={'1.5rem'}
                            color="white"
                        />
                    </button>
                </div>

                <div className="control flex justify-center gap-6">
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
                <div className="volume flex items-center justify-end gap-2">
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
        </div>
    );
};

export default ActionGroupComponent;
