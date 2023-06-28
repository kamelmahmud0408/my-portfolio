import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from '../../../assets/images/eliteSports.jpg';
import project2 from '../../../assets/images/toysmart.jpg';
import project3 from '../../../assets/images/bistro.jpg';
import project4 from '../../../assets/images/foodstation.jpg';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
    const projects = [
        {
            img: project1,
            name: "EliteSports Academy",
            github_Client: "https://github.com/kamelmahmud0408/summer-camp-school-client",
            github_Server: "https://github.com/kamelmahmud0408/summer-camp-school-server",
            live_link: "https://summer-camp-school-b31df.web.app/",
        },
        {
            img: project2,
            name: "Toys Mart",
            github_Client: "https://github.com/kamelmahmud0408/baby-toys-marketplace-client",
            github_Server: "https://github.com/kamelmahmud0408/baby-toys-marketplace-server",
            live_link: "https://baby-toys-marketlace.web.app/",
        },
        {
            img: project3,
            name: "Bistro Boss",
            github_Client: "https://github.com/kamelmahmud0408/bistro-boss-restaurent",
            github_Server: "https://github.com/kamelmahmud0408/bistro-boss-restaurent-server",
            live_link: "https://bistro-boss-restaurent-a8cdb.web.app/",
        },
        {
            img: project4,
            name: "Food Station",
            github_Client: "https://github.com/kamelmahmud0408/chef-recipe-client",
            github_Server: "https://github.com/kamelmahmud0408/the-dragon-server",
            live_link: "https://the-chef-zone-client.web.app/",
        },

    ];
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-bold text-black">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-700 mt-3 text-lg">My awesome works</p>
            </div>
            <br />

            <div className="w-[90%] mx-auto">
                <Swiper
                    slidesPerview={1.2}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {projects.map((project_info, i) => (
                        <SwiperSlide key={i}>
                            <div className="h-fit w-full p-4 bg-gray-400 rounded-xl">
                                <img src={project_info.img} alt="" className="rounded-lg w-full " />
                                <h3 className="text-2xl my-4 font-bold text-black">{project_info.name}</h3>
                                <div className="flex gap-3 ">
                                    <a
                                        href={project_info.live_link}
                                        target="_blank"
                                        className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-2 md:py-3 px-2 md:px-6 flex items-center gap-2 hover:bg-cyan-300"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project_info.github_Client}
                                        target="_blank"
                                        className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-2 md:py-3 px-2 md:px-6 flex items-center gap-2 hover:bg-cyan-300"
                                    >
                                        Github_Client
                                    </a>
                                    <a
                                        href={project_info.github_Server}
                                        target="_blank"
                                        className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-2 md:py-3 px-2 md:px-6 flex items-center gap-2 hover:bg-cyan-300"
                                    >
                                        Github_Server
                                    </a>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
                <Link to='/projects'><button className='bg-cyan-600 font-semibold text-white mt-2 mx-auto rounded-full py-3 px-6 flex items-center gap-2 hover:bg-cyan-300'>See All Projects</button></Link>
            
        </section>
    );
};

export default Project;