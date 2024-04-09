import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import SectionComponent from '../../components/Section/SectionComponent';
import podcastList from '../../podcastList.json';
import { GlobalContext } from '../../contexts/Global/GlobalContext';
import PodcastService from '../../services/podcast.service';

const HomePage = () => {
    const { fetchAPI } = useContext(GlobalContext);
    const [podcastList, setPodcastList] = useState([]);

    useEffect(() => {
        const fetchPodcastList = async () => {
            const result = await fetchAPI(() =>
                PodcastService.getListPodcast()
            );
            console.log(result);
            setPodcastList(result);
        };
        fetchPodcastList();
    }, []);

    return (
        <div className="flex justify-center w-full px-32">
            <SectionComponent title={'Section 1'} podcastList={podcastList} />
            {/* <SectionComponent title={'Section 2'} podcastList={podcastList} /> */}
        </div>
    );
};

export default HomePage;
