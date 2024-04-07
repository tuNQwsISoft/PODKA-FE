import React from 'react';
import './styles.css';
import playLists from './playList.json';
import ListVerticalComponent from '../../components/ListPodcast/Vertical/ListVerticalComponent';
import { IconPlus } from '../../icons';
import BannerComponent from './_component/BannerComponent';

const MyChannelPage = () => {
    return (
        <div className="my-channel-page w-full h-full gap-2">
            <div className="container-gray row-span-3 hidden-container">
                <div className="flex justify-between items-center p-4">
                    <span className="text-xl">My Playlist</span>
                    <div className="cursor-pointer">
                        <IconPlus
                            width={'1rem'}
                            height={'1rem'}
                            fill="#ffffff"
                        />
                    </div>
                </div>
                <div className="divider" />
                <ListVerticalComponent listItems={playLists} />
            </div>
            <div className="container-gray col-span-2">
                <BannerComponent />
            </div>
            <div className="container-gray"></div>
            <div className="container-gray row-span-2"></div>
            <div className="container-gray"></div>
        </div>
    );
};

export default MyChannelPage;
