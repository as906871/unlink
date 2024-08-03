import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { LiaRocketSolid } from 'react-icons/lia';

const Navbar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setSelectedItem(path);
  };

  return (
    <div className="h-screen flex">
      <div className="bg-white text-[#12121E] font-inter flex flex-col justify-between w-full md:w-64 lg:w-80 transition-transform">
        <div className="flex flex-col space-y-6 p-4">
          <div className="flex items-center space-x-2 mt-3">
            <div className="h-12 rounded-full flex justify-center items-center mt-16">
              <img className='bg-transparent w-full mb-6' src="https://i.pinimg.com/736x/d4/7e/f2/d47ef2cdbb019f4e8e4aeb2343cd2863.jpg" alt="logo" />
            </div>
          </div>
          <nav className="flex flex-col space-y-4">
          <Link to="/">
            <p
              className={`flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedItem === '/' ? 'bg-[#875BF8]' : 'bg-white hover:bg-[#875BF8]'} group`}
              onClick={() => handleItemClick('/')}
            >
              <IoHomeOutline className="group-hover:filter h-10 w-10 group-hover:text-black" />
              <span className={`text-black font-popins group-hover:filter ${selectedItem === '/' ? 'text-black' : ''}`}>
                Dashboard
              </span>
            </p>
            </Link>
            <Link to="/rockets">
            <p
              className={`flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedItem === '/rockets' ? 'bg-[#875BF8]' : 'bg-white hover:bg-[#875BF8]'} group`}
              onClick={() => handleItemClick('/rockets')}
            >
              <LiaRocketSolid className="group-hover:filter h-10 w-10 group-hover:text-black" />
              <span className={`text-black font-popins group-hover:filter ${selectedItem === '/rockets' ? 'text-black' : ''}`}>
                Rockets
              </span>
            </p>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <hr className="w-full border-[#2D2D45] my-4" />
          <div className="flex items-center space-x-3">
            <img alt="Profile" className="w-10 h-10 rounded-full" src="https://img.freepik.com/premium-photo/icon-button-man_665280-69540.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user" />
            <div>
              <span className="font-inter">Akshay Sharma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;