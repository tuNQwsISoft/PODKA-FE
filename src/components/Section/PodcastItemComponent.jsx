import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const PodcastItemComponent = ({ podcastItem }) => {
    console.log(podcastItem)
    return (
        <div
            key={podcastItem._id}
            className="podcast-item-container inline-block w-fit h-full"
        >
            <NavLink to="#" className={'podcast-item'}>
                <img
                    src={podcastItem.backgroundImage}
                    alt={podcastItem.name}
                    className="h-52 w-52 rounded-full p-2"
                />
                <div className="h-0.5 w-full bg-slate-400 m-0.5" />
                <div className="flex flex-col gap-2">
                    <span className="flex items-center justify-center text-xl">
                        {podcastItem.name}
                    </span>
                    <span>{podcastItem.user.full_name}</span>
                    <span>{podcastItem.like + ' Likes'}</span>
                </div>
            </NavLink>
        </div>
    );
};

export default PodcastItemComponent;
