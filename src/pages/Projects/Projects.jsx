import React from 'react';
import project1 from '../../assets/images/eliteSports.jpg';
import project2 from '../../assets/images/toysmart.jpg';
import project3 from '../../assets/images/bistro.jpg';
import project4 from '../../assets/images/foodstation.jpg';
import Bot from '../Home/Bot/Bot';

const Projects = () => {

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
        <section id="projects" className="py-10 text-white mt-20">
            <Bot></Bot>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-black">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-700 mt-3 text-lg">My awesome works</p>
            </div>
            <br />

            <div className=" w-full lg:w-[90%] mx-auto">

                    <div>
                        <div className="h-fit w-full p-4 bg-gray-300 rounded-xl mt-10">
                            <img src={project1} alt="" className="rounded-lg w-full " />
                            <h3 className="text-4xl my-4 font-bold text-black">EliteSports Academy</h3>
                            <div>
                                <h3 className='text-cyan-500 font-bold text-xl'>Feature</h3>
                            <p className='text-black my-5'><li>This project is implementation of EliteSports Academy, a sports academy website aimed at providing a platform for users to explore and enroll in various sports classes. The website is responsible for handling the user interface and interaction components of the website, ensuring a smooth and engaging user experience</li>
                                <li>Users can sign up and log in to access personalized features, secure authentication using email and password</li>
                                <li>Student Dashboard:Displaying classes selected by the student, including relevant information, delete option, and payment functionality and showing all the classes in which the student has successfully enrolled</li>
                                <li>
                                    Instructor Dashboard:Form for instructors to add new classes, including class name, image, available seats, price, and automatic inclusion of instructor details
                                </li>
                                <li>
                                    Admin Dashboard:Displaying all classes added by instructors, with relevant information, status, and approval/denial functionality and viewing and managing registered users, including the ability to promote users to instructors or admins
                                </li>
                            </p>
                            </div>
                            <div className='text-black my-2'>
                                <h3 className='text-cyan-500 font-bold text-xl'>Technology Used</h3>
                                <p>React, TailWind CSS, ExpressJS, NodeJs,  MongoDB, Firebase, Stripe,</p>
                            </div>
                            <div className="flex gap-3 ">
                                <a
                                    href='https://summer-camp-school-b31df.web.app/'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/summer-camp-school-client'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Client
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/summer-camp-school-server'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Server
                                </a>

                            </div>
                        </div>
                        
                    </div>
            
                    <hr className='text-black'  />
            </div> 
            <div className="w-full lg:w-[90%] mx-auto">

                    <div>
                        <div className="h-fit w-full p-4 bg-gray-300 rounded-xl mt-10">
                            <img src={project2} alt="" className="rounded-lg w-full " />
                            <h3 className="text-4xl my-4 font-bold text-black">Toys Mart</h3>
                            <div>
                                <h3 className='text-cyan-500 font-bold text-xl'>Feature</h3>
                            <p className='text-black my-5'><li>The home page has gallery and sub category item, Customer review and about us page and clicking on the view details button will show the detailed information of the product.</li>
                                <li>The add toy page has options for users to add toys, along with update and delete options</li>
                                <li>The All Toys page shows all users' toys, and finds toys through search.</li>
                                <li>
                                User authentication
                                </li>
                                <li>
                                Also some fun task like AOS, dynamic title etc.
                                </li>
                            </p>
                            </div>
                            <div className='text-black my-2'>
                                <h3 className='text-cyan-500 font-bold text-xl'>Technology Used</h3>
                                <p>React, TailWind CSS, ExpressJS, NodeJs,  MongoDB, Firebase,</p>
                            </div>
                            <div className="flex gap-3 ">
                                <a
                                    href='https://baby-toys-marketlace.web.app/'
                                    target="_blank"
                                    className=" btn-primary"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/baby-toys-marketplace-client'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Client
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/baby-toys-marketplace-server'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Server
                                </a>

                            </div>
                        </div>
                        
                    </div>
            
                    <hr className='text-black'  />
            </div> 
            <div className="w-full lg:w-[90%]mx-auto">

                    <div>
                        <div className="h-fit w-full p-4 bg-gray-300 rounded-xl mt-10">
                            <img src={project3} alt="" className="rounded-lg w-full " />
                            <h3 className="text-4xl my-4 font-bold text-black">Bistro Boss</h3>
                            <div>
                                <h3 className='text-cyan-500 font-bold text-xl'>Feature</h3>
                            <p className='text-black my-5'><li>The home page has gallery and sub category item, Customer review and about us page and clicking on the view details button will show the detailed information of the product.</li>
                                <li>The add toy page has options for users to add toys, along with update and delete options</li>
                                <li>The All Toys page shows all users' toys, and finds toys through search.</li>
                                <li>
                                User authentication
                                </li>
                                <li>
                                Also some fun task like AOS, dynamic title etc.
                                </li>
                            </p>
                            </div>
                            <div className='text-black my-2'>
                                <h3 className='text-cyan-500 font-bold text-xl'>Technology Used</h3>
                                <p>React, TailWind CSS, ExpressJS, NodeJs,  MongoDB, Firebase, Stripe</p>
                            </div>
                            <div className="flex gap-3 ">
                                <a
                                    href='https://bistro-boss-restaurent-a8cdb.web.app/'
                                    target="_blank"
                                    className=" btn-primary"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/bistro-boss-restaurent'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Client
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/the-dragon-server'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Server
                                </a>

                            </div>
                        </div>
                        
                    </div>
            
                    <hr className='text-black'  />
            </div> 
            <div className="w-full lg:w-[90%] mx-auto">

                    <div>
                        <div className="h-fit w-full p-4 bg-gray-300 rounded-xl mt-10">
                            <img src={project4} alt="" className="rounded-lg w-full " />
                            <h3 className="text-4xl my-4 font-bold text-black">Food Station</h3>
                            <div>
                                <h3 className='text-cyan-500 font-bold text-xl'>Feature</h3>
                            <p className='text-black my-5'><li>The home page has chefs information and most selected items and about us page and clicking on the view recipe button will show the detailed information of the chef.</li>
                                <li>User authentication</li>
                                <li>Also some fun task like React to pdf, lazy loader etc..</li>
                                
                            </p>
                            </div>
                            <div className='text-black my-2'>
                                <h3 className='text-cyan-500 font-bold text-xl'>Technology Used</h3>
                                <p>React, TailWind CSS, ExpressJS, Firebase, </p>
                            </div>
                            <div className="flex gap-3 ">
                                <a
                                    href='https://the-chef-zone-client.web.app/'
                                    target="_blank"
                                    className=" btn-primary"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/chef-recipe-client'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Client
                                </a>
                                <a
                                    href='https://github.com/kamelmahmud0408/the-dragon-server'
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Github_Server
                                </a>

                            </div>
                        </div>
                        
                    </div>
            
                    <hr className='text-black'  />
            </div> 
        </section>
    );
};

export default Projects;