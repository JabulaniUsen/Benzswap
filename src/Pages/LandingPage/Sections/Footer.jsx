import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#1a1c20] text-white py-32">
      <div className="container mx-auto flex flex-wrap justify-between px-5">
        {/* Logo */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-[170px] " />
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Governance</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Learn More */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-3">Learn More</h2>
          <ul>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Help center</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-3">Company</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            {/* Add more company info as needed */}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/5">
          <h2 className="text-xl font-bold mb-3">Newsletter</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-l"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r"><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <p className='text-center m-auto text-sm mt-20'>© 2022 BENZSWAP Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
