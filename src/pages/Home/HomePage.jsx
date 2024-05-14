import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import SectionComponent from '../../components/Section/SectionComponent';
import podcastList from '../../podcastList.json';
import { GlobalContext } from '../../contexts/Global/GlobalContext';
import PodcastService from '../../services/podcast.service';

const HomePage = () => {
    const { fetchAPI } = useContext(GlobalContext);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchSections = async () => {
            const result = await fetchAPI(() =>
                PodcastService.getListPodcast()
            );
            if (result) {
                setSections(result.sections);
            }
        };
        fetchSections();
    }, []);

    if (sections)
        return (
            <div className="flex justify-center w-full px-32">
                {sections?.map((section, index) => {
                    return (
                        <SectionComponent
                            key={index}
                            title={section.name}
                            podcastList={section.podcasts}
                        />
                    );
                })}

                {/* <SectionComponent title={'Section 2'} podcastList={podcastList} /> */}
            </div>
        );
};

export default HomePage;
