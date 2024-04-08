import React from 'react';
import BannerSrc from '../../../assets/images/banner-background.png';

const BannerComponent = ({
    bannerSrc = BannerSrc,
    title = 'Title',
    subtitle = 'Subtitle',
    greeting = 'Hi there!\t Welcome to my channel',
}) => {
    return (
        <div className="relative w-full h-full">
            <img src={BannerSrc} alt="banner" className="w-full h-full" />
            <div className="absolute flex flex-col gap-2 top-[40%] left-[5%]">
                <div>
                    <span className="text-header">{title}</span>
                </div>
                <div className="pb-4">
                    <span>{subtitle}</span>
                </div>
                <p className="text-wrap">{greeting}</p>
            </div>
            <button className="absolute button highlight top-[5%] right-[2%]">
                Edit
            </button>
        </div>
    );
};

export default BannerComponent;
