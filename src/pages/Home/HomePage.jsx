import React from 'react';
import './styles.css';
import SectionComponent from '../../components/Section/SectionComponent';
import podcastList from '../../podcastList.json';

const HomePage = () => {
    return (
        <div>
            <SectionComponent title={'Section 1'} podcastList={podcastList} />
            <SectionComponent title={'Section 2'} podcastList={podcastList} />
        </div>
    );
};

export default HomePage;
