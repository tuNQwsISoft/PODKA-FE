import React, { useContext } from 'react';
import './styles.css';
import playLists from './playList.json';
import mostViewList from './mostViewList.json';
import ListVerticalComponent from '../../components/ListPodcast/Vertical/ListVerticalComponent';
import { IconMyPlaylist, IconPlus } from '../../icons';
import BannerComponent from './_component/BannerComponent';
import ListItemLargeComponent from '../../components/ListPodcast/ItemLarge/ListItemLargeComponent';
import { GlobalContext } from '../../contexts/Global/GlobalContext';
import { GlobalSetPopup } from '../../contexts/Global/GlobalAction';
import { popupTarget } from '../../constants';

const MyChannelPage = () => {
    const globalContext = useContext(GlobalContext);
    return (
        <div className="my-channel-page w-full h-full gap-2">
            <div className="container-gray row-span-3 hidden-container">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-2">
                        <IconMyPlaylist
                            width={'1rem'}
                            height={'1rem'}
                            fill="#ffffff"
                        />
                        <span className="text-xl">My Playlist</span>
                    </div>
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
            <div>
                <button
                    className="button highlight"
                    onClick={() => {
                        console.log('pressed');
                        globalContext.dispatch(
                            GlobalSetPopup({
                                type: 'info',
                                header: 'Create Podcast',
                                confirmMessage: 'Successfully create new PR!',
                                show: true,
                                target: popupTarget.createPodcastForm,
                                onConfirm: () =>
                                    // navigate("/purchase-request/non-stock-control", {
                                    //     state: {
                                    //         createdAt: Date.now(),
                                    //     },
                                    // }),
                                    false,
                            })
                        );
                    }}
                >
                    <span className="text-small font-bold pl-4 pr-4">
                        Create Podcast
                    </span>
                </button>
            </div>
            <div className="container-gray flex flex-col gap-2 row-span-2 hidden-container">
                <div className="p-4">
                    <span className="text-xl">Most Viewed</span>
                </div>
                <div className="divider" />
                <ListItemLargeComponent listItems={mostViewList} />
            </div>
            <div className="container-gray"></div>
        </div>
    );
};

export default MyChannelPage;
