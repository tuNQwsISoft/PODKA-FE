import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PodcastDiskPlayComponent from './_component/PodcastDiskPlayComponent';
import './styles.css';
import ActionGroupComponent from './_component/ActionGroupComponent';
import { audios } from '../../data/audios';

const PodcastDetailPage = () => {
    const { id } = useParams();
    const [currentAudio, setCurrentAudio] = useState(audios[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleNext = () => {
        if (
            currentAudio.nextAudioId !== null &&
            currentAudio.nextAudioId !== undefined &&
            currentAudio.nextAudioId >= 0
        ) {
            setCurrentAudio(audios[currentAudio.nextAudioId]);
        }
    };

    const handlePrevious = () => {
        if (
            currentAudio.previousAudioId !== null &&
            currentAudio.previousAudioId !== undefined &&
            currentAudio.previousAudioId >= 0
        ) {
            setCurrentAudio(audios[currentAudio.previousAudioId]);
        }
    };

    useEffect(() => {}, []);

    return (
        <div className="p-1 w-full h-full gap-2 flex">
            <div className="container-gray flex flex-col w-full h-full p-4">
                <PodcastDiskPlayComponent
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                />
                <ActionGroupComponent
                    currentAudio={currentAudio}
                    setCurrentAudio={setCurrentAudio}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            </div>
            <div className="container-gray w-full h-full"></div>
        </div>
    );
};

export default PodcastDetailPage;
