import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'

const Navbar = () => {
 const [open, setOpen] = useState(false);

 const toggleMenu = () => {
    setOpen(!open);
 };

 return (
    <nav className="bg-[#1a1d21] p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white w-[120px] lg:w-[200px]">
            <img src={logo} alt="" />
          </a>
          <div className="hidden md:flex items-center gap-4 space-x-1 text-sm">
            <a href="#" className="text-white">Product</a>
            <a href="#" className="text-white">Governance</a>
            <a href="#" className="text-white">Community</a>
            <a href="#" className="text-white pr-[21rem]">Blog</a>
            <a href="https://benzswap-testnet.netlify.app/swap"><button className='w-[150px] justify-center p-3 hover:transition-[0.8s] hover:bg-[#0374ef]flex hover:bg-[#0374ef] hover:scale-[1.1] items-center rounded-3xl text-white bg-transparent border-[1px] border-[#0374ef]'>Launch App</button></a>
          </div>
          <div className="md:hidden flex items-center">
            <button type="button" onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-10 p-2 flex flex-col justify-center items-center gap-10 rounded shadow-md space-y-1">
            <a href="#" className="text-white">Product</a>
            <a href="#" className="text-white">Community</a>
            <a href="#" className="text-white ">Blog</a>
            <a href="https://benzswap-testnet.netlify.app/swap"><button className='w-[150px] justify-center p-3 hover:transition-[0.8s] hover:bg-[#0374ef]flex hover:bg-[#0374ef] hover:scale-[1.1] items-center rounded-3xl text-white bg-transparent border-[1px] border-[#0374ef]'>Launch App</button></a>
          </div>
        )}
      </div>
    </nav>
 );
};

export default Navbar;