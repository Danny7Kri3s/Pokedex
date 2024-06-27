import React, { useEffect, useState } from 'react'
import Logo from '/pngegg.png'
import Favourite from '../componenets/Favourite'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


const Nav = ({ darkMode, toggleBtn }) => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className={`bg-slate-500 h-[70px] fixed w-full top-0 z-50 flex items-center justify-between px-2 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <img className='w-[200px] h-[50px] flex-1 md:flex-grow-0 md:ml-10 object-contain' src={Logo} alt='logo' />

      <div onClick={() => setOpen(!open)} className='md:hidden block transition-all ease-in-out duration-75'>
        {open ? (
          <ImCross className='text-white text-[1.5rem] hidden' />
        ) : (
          <GiHamburgerMenu className='text-white text-[2rem]' />
        )}
      </div>

      <div className={`flex flex-col top-10 md:static fixed rounded-lg w-[60%] md:w-auto md:flex-row bg-slate-700 dark:bg-gray-100 md:dark:bg-slate-500 md:bg-transparent z-[90] justify-center items-center ${open ? '-right-6' : '-right-full'} pb-4 md:pb-0 mr-8 shadow-2xl shadow-black md:shadow-none dark:shadow-gray-900 transition-all ease-in-out duration-300 mt-10 md:mt-0`}>
        <div onClick={() => setOpen(!open)} className='absolute block md:hidden top-4 right-2'>
          <ImCross className='text-white dark:text-black text-[1.2rem]' />
        </div>
        <div className='mt-10 md:mt-0 w-[100%] dark:text-black flex flex-col md:flex-row justify-center items-center'>
          <Link to={'/'} onClick={handleClick}>
            <div className='hover:border-b-4 hover:border-gray-100 md:hover:bg-slate-600 dark:hover:bg-transparent p-[1.30rem] transition-all ease-in-out duration-75'>
              <p className='text-center dark:text-black dark:md:text-white text-white font-poppins font-[600]'>Home</p>
            </div>
          </Link>

          <Link to={'/favourite'} onClick={handleClick}>
            <div className='hover:border-b-4 hover:border-gray-100 md:hover:bg-slate-600 dark:hover:bg-transparent p-[1.30rem] transition-all ease-in-out duration-75'>
              <p className='text-center dark:text-black dark:md:text-white text-white font-poppins font-[600]'>Favourite</p>
            </div>
          </Link>

          <Link to={'/about'} onClick={handleClick}>
            <div className='hover:border-b-4 hover:border-gray-100 md:hover:bg-slate-600 dark:hover:bg-transparent p-[1.30rem] transition-all ease-in-out duration-75'>
              <p className='text-center dark:text-black dark:md:text-white text-white font-poppins font-[600]'>About</p>
            </div>
          </Link>

          <Link to={'/contact'} onClick={handleClick}>
            <div className='hover:border-b-4 hover:border-gray-100 md:hover:bg-slate-600 dark:hover:bg-transparent p-[1.30rem] transition-all ease-in-out duration-75'>
              <p className='text-center dark:text-black dark:md:text-white text-white font-poppins font-[600]'>Contact</p>
            </div>
          </Link>
        </div>

        <button 
          onClick={toggleBtn}
          className='md:p-3 p-[0.85rem] md:ml-4 bg-gray-800 dark:bg-gray-500 dark:md:bg-gray-300 md:bg-gray-700 text-white dark:text-black rounded-[50%] transition-all ease-in duration-75'>
          {darkMode ? <CiLight className='text-[1.5rem] font-[900] transition-all ease-in duration-75' /> : <MdDarkMode className='text-[1.4rem] font-bold transition-all ease-in duration-75' />}
        </button>
      </div>
    </div>
  );
}

export default Nav;
