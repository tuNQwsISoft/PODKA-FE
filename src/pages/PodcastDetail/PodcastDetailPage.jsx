import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PodcastDiskPlayComponent from './_component/PodcastDiskPlayComponent';
import './styles.css';
import ActionGroupComponent from './_component/ActionGroupComponent';
import { audios } from '../../data/audios';
import avatar from '../../assets/images/avatar.jpg';
import groupAvatar from '../../assets/images/group-avatar.jpg';
import { IconThumbUp } from '../../icons';
import { PodcastContext } from '../../contexts/PodcastContext/PodcastContext';
import {
    PodcastSetAudio,
    PodcastSetIsPlaying,
    PodcastSetShow,
} from '../../contexts/PodcastContext/PodcastAction';
import PodcastService from '../../services/podcast.service';
import { GlobalContext } from '../../contexts/Global/GlobalContext';

const PodcastDetailPage = () => {
    const { id } = useParams();
    const {
        isPlaying,
        currentAudio,
        dispatch,
        audioRef,
        progressBarRef,
        onLoadedMetadata,
        onEnded,
        timeProgress,
        handleProgressChange,
        duration,
        volume,
        setVolume,
    } = useContext(PodcastContext);
    const { fetchAPI, isFetching } = useContext(GlobalContext);
    // const [currentAudio, setCurrentAudio] = useState(audios[0]);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleNext = () => {
        if (
            currentAudio.nextAudioId !== null &&
            currentAudio.nextAudioId !== undefined &&
            currentAudio.nextAudioId >= 0
        ) {
            // setCurrentAudio(audios[currentAudio.nextAudioId]);
        }
    };

    const handlePrevious = () => {
        if (
            currentAudio.previousAudioId !== null &&
            currentAudio.previousAudioId !== undefined &&
            currentAudio.previousAudioId >= 0
        ) {
            // setCurrentAudio(audios[currentAudio.previousAudioId]);
        }
    };

    const handleLike = () => {
        console.log('like');
        setIsLiked((prev) => !prev);
    };

    const setIsPlaying = (isPlaying) => {
        dispatch(PodcastSetIsPlaying(isPlaying));
    };

    useEffect(() => {
        const getPodcastDetail = async () => {
            const result = await fetchAPI(() =>
                PodcastService.getPodcastDetail(id)
            );
            if (result) {
                dispatch(PodcastSetAudio(result));
            }
        };
        getPodcastDetail();
        dispatch(PodcastSetShow(false));
        return () => {
            dispatch(PodcastSetShow(true));
        };
    }, []);

    if (isFetching || !currentAudio) return 'Loading...';
    return (
        <div className="p-1 w-full h-full gap-2 flex">
            <div className="container-gray flex flex-col w-full h-full p-4">
                <PodcastDiskPlayComponent
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    thumbnailSrc={currentAudio.backgroundImage}
                />
                <ActionGroupComponent
                    currentAudio={currentAudio}
                    // setCurrentAudio={setCurrentAudio}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    onLoadedMetadata={onLoadedMetadata}
                    onEnded={onEnded}
                    timeProgress={timeProgress}
                    handleProgressChange={handleProgressChange}
                    duration={duration}
                    volume={volume}
                    setVolume={setVolume}
                />
            </div>
            <div className="container-gray w-full h-full flex flex-col gap-2 p-4 px-8 items-center">
                <span className="text-header">{currentAudio.title}</span>
                <div className="grid w-full grid-cols-2 grid-rows-3 gap-4">
                    <div className="field flex gap-8">
                        <div className="key flex flex-col gap-2">
                            <img
                                // src={userContext.user.avatar}
                                src={avatar}
                                alt={'avatar'}
                                className="h-12 w-12 rounded-full"
                            />
                            <span>Creator</span>
                        </div>
                        <div className="value flex items-center">
                            <a href="">{currentAudio.creator}</a>
                        </div>
                    </div>
                    <div className="field flex gap-8">
                        <div className="key flex flex-col gap-2">
                            <img
                                // src={userContext.user.avatar}
                                src={groupAvatar}
                                alt={'group avatar'}
                                className="h-12 w-12 rounded-full"
                            />
                            <span>Guests</span>
                        </div>
                        <div className="value flex items-center gap-2">
                            {currentAudio.guests.map((guest, index) => {
                                return (
                                    <>
                                        <a key={index} href="">
                                            {guest}
                                        </a>
                                        {index <
                                        currentAudio.guests.length - 1 ? (
                                            <span>,</span>
                                        ) : null}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div className="field flex gap-8">
                        <div
                            className="like-button flex flex-col gap-2 cursor-pointer items-center"
                            onClick={handleLike}
                        >
                            <IconThumbUp
                                width={'3rem'}
                                height={'3rem'}
                                fill={`${isLiked ? '#3D5CFF' : 'white'}`}
                            />
                            <span>Likes</span>
                        </div>
                        <div className="value flex items-center gap-2">
                            <span>{currentAudio.likes}</span>
                        </div>
                    </div>
                    <div className="description row-start-3 col-span-2 flex flex-col gap-2">
                        <span className="text-lg">Description</span>
                        <div className="divider" />
                        <p className="text-wrap">{currentAudio.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodcastDetailPage;
