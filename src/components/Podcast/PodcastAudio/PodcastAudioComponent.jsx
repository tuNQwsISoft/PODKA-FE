import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { PodcastContext } from '../../../contexts/PodcastContext/PodcastContext';

const PodcastAudioComponent = () => {
    const { audioRef, currentAudio, onLoadedMetadata, onEnded } =
        useContext(PodcastContext);

    return ReactDOM.createPortal(
        <>
            <audio
                src={currentAudio.podcast}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
        </>,
        document.body
    );
};

export default PodcastAudioComponent;
