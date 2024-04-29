import React, { useState } from 'react';

const PodcastDiskPlayComponent = ({
    thumbnailSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz11dZWlpNuX0pRGqi74aAaKQmG0bw3wokBWsPCsVGBA&s',
    isPlaying = false,
    setIsPlaying = false,
}) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div
                className={`disk-wrapper h-full max-h-96 rounded-full ${isPlaying ? 'active' : ''}`}
                onClick={() => setIsPlaying((prev) => !prev)}
            >
                <img className="w-96 h-96" src={thumbnailSrc} alt="thumbnail" />
            </div>
        </div>
    );
};

export default PodcastDiskPlayComponent;
