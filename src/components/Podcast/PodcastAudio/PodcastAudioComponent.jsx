import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { PodcastContext } from '../../../contexts/PodcastContext/PodcastContext';

const PodcastAudioComponent = () => {
    const {
        audioRef,
        currentAudio,
        onLoadedMetadata,
        onEnded,
        progressBarRef,
    } = useContext(PodcastContext);

    useEffect(() => {
        onLoadedMetadata();
    }, [currentAudio, onLoadedMetadata]);

    return ReactDOM.createPortal(
        <>
            <audio
                src={currentAudio?.podcast}
                ref={audioRef}
                // onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
            <div className="hidden">
                <span className="time current"></span>
                <input
                    title="audio-timespan"
                    type="range"
                    defaultValue="0"
                    ref={progressBarRef}
                    // onChange={handleProgressChange}
                />
            </div>
        </>,
        document.body
    );
};

export default PodcastAudioComponent;
