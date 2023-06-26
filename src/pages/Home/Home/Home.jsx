import React from 'react';
import Bot from '../Bot/Bot';
import Banner from '../Banner/Banner';
import Contact from '../../Sheared/Contact/Contact';
import HireMe from '../HireMe/HireMe';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import About from '../About/About';

const Home = () => {

    return (
        <div>
            <Bot></Bot>
            <Banner></Banner>
            <About></About>
            <Skills ></Skills>
            <Project ></Project>
            <HireMe></HireMe>
            <Contact ></Contact>

        </div>
    );
};

export default Home;