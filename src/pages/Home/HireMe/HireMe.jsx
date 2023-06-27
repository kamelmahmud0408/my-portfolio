import React from 'react';
import hireImg from '../../../assets/images/kamel_fb-removebg-preview.png'
const HireMe = () => {
    return (
        <section id="hireme" className="py-10 px-3 text-white">
            <div className="text-center">
                <h3 className="text-4xl text-black font-semibold">
                    Hire <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-700 mt-3 text-lg">Do you have any work?</p>
            </div>
            <div className="bg-gray-400 relative px-8 rounded-2xl py-5 lg:max-w-6xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse  items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Do you want any work from me?
                    </h2>
                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-black leading-6">
                        Passionate junior web developer with a strong foundation in front-end development. Proficient in HTML, CSS, and JavaScript, as well as popular frameworks like React . Experienced in creating responsive websites, e-commerce platforms, and interactive web applications. Eager to learn and adapt to new technologies, I thrive in collaborative environments where I can contribute innovative ideas. Committed to delivering high-quality, user-centric websites and excited to make a positive impact as part of a dynamic team. Let's build something amazing together
                    </p>
                    <button className="btn-primary mt-10">Say Hello</button>
                </div>
                <img
                    src={hireImg}
                    alt=""
                    className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                />
            </div>
        </section>
    );
};

export default HireMe;