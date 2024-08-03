import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import style from "./sidebar.module.css"

const SidebarLayout = ({ children, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#12121E] h-screen overflow-hidden">
      <div className={`w-full md:w-2/5 lg:w-1/5 h-full md:relative ${isSidebarOpen ? 'absolute z-50' : 'hidden'} md:block`}>
        <Navbar closeSidebar={toggleSidebar} />
      </div>
      <div className="w-full md:w-4/5 overflow-y-auto relative">
        <div className="md:hidden flex justify-between items-center p-4">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          <span className={style.text_3d} data-text={title}>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;