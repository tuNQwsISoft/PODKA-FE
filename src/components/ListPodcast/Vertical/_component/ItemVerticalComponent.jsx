import React, { useState } from 'react';
import { IconPauseCircle } from '../../../../icons';

const ItemVerticalComponent = ({
    item = {
        thumbnailSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz11dZWlpNuX0pRGqi74aAaKQmG0bw3wokBWsPCsVGBA&s',
        title: 'Title',
        subtitle: 'Subtitle',
    },
    isPlaying = false,
}) => {
    const [active, setActive] = useState(isPlaying);
    return (
        <div
            className="flex gap-2 cursor-pointer items-center justify-between min-w-52 w-full pr-4"
            onClick={() => setActive(!active)}
        >
            <div className="flex gap-4">
                <img
                    src={item.thumbnailSrc}
                    alt={item.title}
                    className="h-20 w-20 rounded-2xl p-2"
                />
                <div className="flex flex-col justify-center items-start gap-2">
                    {active ? (
                        <span className="text-[#134c85]">{item.title}</span>
                    ) : (
                        <span>{item.title}</span>
                    )}
                    {active ? (
                        <span className="text-small text-[#134c85]">
                            {item.subtitle}
                        </span>
                    ) : (
                        <span className="text-small">{item.subtitle}</span>
                    )}
                </div>
            </div>

            <IconPauseCircle
                height={'2rem'}
                width={'2rem'}
                fill="#134c85"
                className={`${!active ? 'opacity-0' : ''}`}
            />
        </div>
    );
};

export default ItemVerticalComponent;
