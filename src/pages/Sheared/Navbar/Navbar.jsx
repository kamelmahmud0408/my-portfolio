import React, { useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav
            className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60  text-gray-900" : "text-white"
                }`}
        >
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold text-black">
                        Ka<span className="text-cyan-600">me</span>l
                    </h4>
                </div>
                <div
                    className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-white"
                        } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
                >
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        <li className="px-6 hover:text-cyan-600"><Link to='/'>Home</Link></li>
                        <li className="px-6 hover:text-cyan-600"><Link to='/about'>About</Link></li>
                        <li className="px-6 hover:text-cyan-600"><Link to='/skills'>Skills</Link></li>
                        <li className="px-6 hover:text-cyan-600"><Link to='/projects'>Projects</Link></li>
                        <li className="px-6 hover:text-cyan-600"><Link to='/contact'>Contact</Link></li>
                        <li className='items-center'><button className='btn-primary '><Link to='https://drive.google.com/file/d/1w8Da7nmx-eDXiwQkNv87V1cmB4psvMxM/view?usp=drive_link'>Download Resume </Link></button></li>
                        
                    </ul>
                </div>
                <div className='flex items-center md:hidden '>
                    <Link to='https://drive.google.com/file/d/1w8Da7nmx-eDXiwQkNv87V1cmB4psvMxM/view?usp=drive_link'><button className='bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-2 px-6 flex items-center gap-2'>Resume <ion-icon name="arrow-down-outline"></ion-icon></button></Link>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`z-[999]  ${open ? "text-gray-900" : "text-black"
                            } text-3xl md:hidden m-5`}
                    >
                        <ion-icon name="menu"></ion-icon>
                    </div>
                </div>
                <div
                    className={`md:hidden text-gray-900 absolute w-2/3 h-screen
        px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
                        }`}
                >
                    <ul className="flex flex-col  h-full gap-10 py-2 text-lg">
                        
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/'>Home</Link></li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/about'>About</Link></li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/skills'>Skills</Link></li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/projects'>Projects</Link></li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/contact'>Contact</Link></li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;