import React from 'react';
import Bot from '../Bot/Bot';
import Banner from '../Banner/Banner';
import Contact from '../../Sheared/Contact/Contact';
import HireMe from '../HireMe/HireMe';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import About from '../About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2200,
});

const Home = () => {

    return (
        <div>
            <Bot></Bot>
            <div data-aos="fade-down">
                <Banner></Banner>
            </div>
            <div data-aos="fade-down">
                <About></About>
            </div>

            <div data-aos="fade-down">
                <Skills ></Skills>
            </div>
            <div data-aos="fade-down">
                <Project></Project>
            </div>
            <div data-aos="fade-down">
                <HireMe></HireMe>
            </div>
            <div data-aos="fade-down">
                <Contact ></Contact>
            </div>

        </div>
    );
};

export default Home;