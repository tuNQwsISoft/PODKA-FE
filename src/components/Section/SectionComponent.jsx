import React from 'react';
import PodcastItemComponent from './_component/PodcastItemComponent';
import './styles.css';

const SectionComponent = ({ title, podcastList }) => {
    return (
        <div className="section-component px-32 pt-12">
            <span className="section-item text-3xl">{title}</span>
            <div className="h-0.5 w-full bg-slate-400" />

            <div className="podcast-list flex flex-col gap-x-20 overflow-x-auto whitespace-nowrap w-full h-80 flex-wrap">
                {podcastList.map((podcastItem) => {
                    return <PodcastItemComponent podcastItem={podcastItem} />;
                })}
            </div>
        </div>
    );
};

export default SectionComponent;
