import React from 'react';
import About from '../Home/About/About';
import Bot from '../Home/Bot/Bot';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2200,
})

const AboutPage = () => {
    return (
        <div data-aos="fade-down" className='mt-10'>
            <About></About>
            <Bot></Bot>
        </div>
    );
};

export default AboutPage;