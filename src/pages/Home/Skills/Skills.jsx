import React from 'react';
import tailimg from '../../../assets/images/Tailwind_CSS_Logo.svg.png'
import htmlimg from '../../../assets/images/html.png'
import cssimg from '../../../assets/images/cssicon.webp'
import jsimg from '../../../assets/images/jsicon.png'
import reactimg from '../../../assets/images/reacticon.jpg'
import boostrapimg from '../../../assets/images/bootstrap.jpg'
import nodejsimg from '../../../assets/images/nodejs.jpg'
import expressjsimg from '../../../assets/images/expressjs.jpg'
import mongodbjsimg from '../../../assets/images/MongoDB.jpg'
import firebasesimg from '../../../assets/images/expressjs.jpg'


const Skills = () => {
    const skills = [
        {
          logo: `${htmlimg}`,
          name: "HTML5",
          level: "Advance",
          count: 90,
        },
        {
          logo: `${cssimg}`,
          name: "CSS3",
          level: "Advance",
          count: 90,
        },
        {
          logo: `${jsimg}`,
          name: "Javascript",
          level: "Intermediate",
          count: 70,
        },
        {
          logo: `${reactimg}`,
          name: "ReactJS",
          level: "Intermediate",
          count: 86,
        },
        {
          logo: `${nodejsimg}`,
            name: "NodeJs",
            level: "Bigginer",
            count: 50,
          },
          {
            logo: `${expressjsimg}`,
            name: "ExpressJs",
            level: "Intermediate",
            count: 70,
          },
          {
            logo: `${boostrapimg}`,
            name: "Boostrap",
            level: "Advance",
            count: 90,
          },
          {
            logo: `${tailimg}`,
            name: "Tailwind",
            level: "Advance",
            count: 90,
          },
          {
            logo: `${mongodbjsimg}`,
            name: "MongoDB",
            level: "Intermediate",
            count: 75,
          },
          {
            logo: `${firebasesimg}`,
            name: "Firebase",
            level: "Bigginer",
            count: 54,
          },
             
      ];
    return (
        <section id="skills" className="py-10 bg-gray-300 relative">
            <div className="mt-8 text-gray-100 text-center">
               <a href="/#skills"> <h3 className="text-4xl font-semibold text-black">
                    My <span className="text-cyan-600">Skills</span>
                </h3></a>
                <p className="text-gray-700 mt-3 text-lg">My knowledge</p>
                <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-300 p-10 rounded-xl"
                        >
                            <div
                                style={{
                                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-center group-hover:text-cyan-600">
                                    <img className='w-20' src={skill.logo} alt="" />
                                </div>
                            </div>
                            <h2 className='mt-2 font-semibold text-black'>{skill.name}</h2>
                            <p className="text-xl mt-3 text-black">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;