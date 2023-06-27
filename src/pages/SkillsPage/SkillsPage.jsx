import React from 'react';
import Skills from '../Home/Skills/Skills';
import Bot from '../Home/Bot/Bot';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2200,
})

const SkillsPage = () => {
    return (
        <div data-aos="fade-down" className='mt-10'>
            <Skills></Skills>
            <Bot></Bot>
        </div>
    );
};

export default SkillsPage;