import React, { createContext, useReducer, useRef, useState } from 'react';
import { audios } from '../../data/audios';
import PodcastReducer from './PodcastReducer';

const INIT_STATE = {
    isPlaying: false,
    currentAudio: audios[0],
    show: false,
    handleNext: () => {},
    handlePrevious: () => {},
};

export const PodcastContext = createContext(INIT_STATE);

const PodcastContextProvider = ({ children }) => {
    const audioRef = useRef();
    const [state, dispatch] = useReducer(PodcastReducer, INIT_STATE);

    return (
        <PodcastContext.Provider
            value={{
                isPlaying: state.isPlaying,
                dispatch,
                audioRef,
                currentAudio: state.currentAudio,
                show: state.show,
            }}
        >
            {children}
        </PodcastContext.Provider>
    );
};

export default PodcastContextProvider;
