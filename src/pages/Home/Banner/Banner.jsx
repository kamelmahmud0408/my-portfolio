import React from 'react';
import kamel from '../../../assets/images/kamel_fb-removebg-preview.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    
    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center mt-10"
        >
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={kamel} alt="" className="md:w-11/12 h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Mahmudul Hasan Kamel</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5  font-bold text-gray-600">
                        Fullstack Developer
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa nulla repellendus non deserunt, totam aliquam, hic sapiente voluptatum sequi rerum temporibus ea! Fuga maiores quisquam mollitia natus, impedit aspernatur autem quae nesciunt ipsam velit sit laudantium magni praesentium enim voluptas expedita error voluptate nobis deleniti possimus laborum repudiandae. Consectetur, omnis ea explicabo doloribus voluptatibus blanditiis eius deleniti voluptas praesentium iusto molestiae numquam non earum magnam est ipsa ducimus, vero impedit consequuntur! Eum incidunt corrupti ipsam ullam atque nobis, tempora perferendis ab nostrum, praesentium eius quam laudantium. Officia, doloribus magnam? A quos consectetur atque voluptates saepe et deleniti! Expedita, quos!</p>
                    <button className="btn-primary  mt-8">Contact Me</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                    <Link className="text-gray-600 hover:text-white" to='https://www.facebook.com/profile.php?id=100012791623777'><ion-icon  name='logo-facebook'></ion-icon></Link>
                    <Link className="text-gray-600 hover:text-white  " to='https://www.linkedin.com/in/mahmudul-hasan-kamel/'><ion-icon name='logo-linkedin'></ion-icon></Link>
                    <Link className="text-gray-600 hover:text-white  " to='https://github.com/kamelmahmud0408'><ion-icon name='logo-github'></ion-icon></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;