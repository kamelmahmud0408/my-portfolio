import React from 'react';
import Bot from '../Bot/Bot';
import Banner from '../Banner/Banner';
import Contact from '../../Sheared/Contact/Contact';
import HireMe from '../HireMe/HireMe';

const Home = () => {
    return (
        <div>
            <Bot></Bot>
            <Banner></Banner>
            <HireMe></HireMe>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;