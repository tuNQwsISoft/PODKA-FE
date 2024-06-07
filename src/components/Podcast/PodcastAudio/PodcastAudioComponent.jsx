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
        backgroundSoundRef,
        backgroundSound,
    } = useContext(PodcastContext);

    return ReactDOM.createPortal(
        <>
            <audio
                src={currentAudio?.podcast}
                ref={audioRef}
                // onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
            <audio
                src={backgroundSound}
                ref={backgroundSoundRef}
                onEnded={onEnded}
            />
            <div className="hidden">
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
