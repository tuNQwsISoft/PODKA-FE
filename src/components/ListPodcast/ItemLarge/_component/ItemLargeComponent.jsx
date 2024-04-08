import React from 'react';
import { IconPlay } from '../../../../icons';
import { NavLink } from 'react-router-dom';

const ItemLargeComponent = ({
    thumbnailSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz11dZWlpNuX0pRGqi74aAaKQmG0bw3wokBWsPCsVGBA&s',
    title = 'Title',
}) => {
    return (
        <div className="relative p-2 cursor-pointer w-full max-h-40">
            <div className="relative w-full h-40">
                <img
                    src={thumbnailSrc}
                    alt={title}
                    className="w-full h-40 rounded-3xl"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30 backdrop-blur-sm rounded-3xl" />
            </div>

            <div className="absolute flex items-center top-[70%] gap-4 pl-4 w-full h-[30%]">
                <div className="flex items-center justify-center bg-highlight rounded-[50%] w-[10%] h-[60%] min-w-[2rem] min-h-[2rem]">
                    <IconPlay width={'1rem'} height={'1rem'} fill="#ffffff" />
                </div>
                <div className="flex items-center justify-center">
                    <span className="">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default ItemLargeComponent;
