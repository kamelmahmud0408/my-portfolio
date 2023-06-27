import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      <div className='my-4 text-3xl flex items-center md:justify-center justify-center gap-5'>
        <Link className="text-cyan-600 hover:text-white" to='https://www.facebook.com/profile.php?id=100012791623777'><ion-icon name='logo-facebook'></ion-icon></Link>
        <Link className="text-cyan-600 hover:text-white  " to='https://www.linkedin.com/in/mahmudul-hasan-kamel/'><ion-icon name='logo-linkedin'></ion-icon></Link>
        <Link className="text-cyan-600 hover:text-white  " to='https://github.com/kamelmahmud0408'><ion-icon name='logo-github'></ion-icon></Link>
      </div>
      Copyright © 2023 John kamel.All Rights reserved.
    </div>
  );
};

export default Footer;