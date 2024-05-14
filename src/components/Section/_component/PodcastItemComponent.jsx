import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles.css';

const PodcastItemComponent = ({ podcastItem }) => {
    return (
        <div
            key={podcastItem.id}
            className="podcast-item-container inline-block w-fit h-full"
        >
            <Link
                key={podcastItem.title}
                to={`/podcast/${podcastItem.id}`}
                className={'podcast-item'}
            >
                <img
                    src={
                        podcastItem.backgroundImage ??
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz11dZWlpNuX0pRGqi74aAaKQmG0bw3wokBWsPCsVGBA&s'
                    }
                    alt={podcastItem.title}
                    className="h-52 w-52 rounded-full p-2"
                />
                <div className="h-0.5 w-full bg-slate-400 m-0.5" />
                <div className="flex flex-col gap-2">
                    <span className="flex items-center justify-center text-xl">
                        {podcastItem.title}
                    </span>
                    <span>{podcastItem.creator}</span>
                    <span>{podcastItem.likes + ' Likes'}</span>
                </div>
            </Link>
        </div>
    );
};

export default PodcastItemComponent;
