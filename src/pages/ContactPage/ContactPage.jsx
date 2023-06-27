import React from 'react';
import Contact from '../Sheared/Contact/Contact';
import Bot from '../Home/Bot/Bot';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2200,
})

const ContactPage = () => {
    return (
        <div data-aos="fade-down" className='mt-10'>
            <Contact></Contact>
            <Bot></Bot>
        </div>
    );
};

export default ContactPage;