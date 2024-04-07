import React, {useEffect, useState} from 'react';
import './styles.css';
import SectionComponent from '../../components/Section/SectionComponent';
import podcastList from '../../podcastList.json';
import {connection} from "../../connection/connection";


const HomePage = () => {
    const [podcasts, setPodcasts] = useState([]);
    useEffect(() => {
        connection.get("/api/get-all-post-cast")
            .then(({ data }) => {
                setPodcasts(data);
            })
            .catch(error => {
                console.error("Error fetching podcasts:", error);
            });
    }, []);
    return (
        <div>
            <SectionComponent title={'Section 1'} podcastList={podcasts} />
            {/* <SectionComponent title={'Section 2'} podcastList={podcastList} />*/}

        </div>
    );
};

export default HomePage;
