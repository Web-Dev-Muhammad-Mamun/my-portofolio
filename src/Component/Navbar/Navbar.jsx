import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isclicked, setIsClicked] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 text-black fixed px-4 backdrop-blur-lg border-b-4 z-50'>
      <div>
        <h1 className='text-5xl font-signiture ml-2'>Mamun</h1>
      </div>

      <ul className='hidden md:flex'>
        {MenuData.map((link) => {
          return (
            <li
              key={link.id}
              className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>
              <Link
              to={link.href}
              spy={true}
              smooth={true}
              offset={-60} // Adjust as needed to account for any fixed header
              duration={1000}>
              {link.link}
            </Link>

            </li>
          );
        })}
      </ul>

      <div
        onClick={() => {
          setIsClicked(!isclicked);
        }}
        className='md:hidden cursor-pointer pr-4 z-10 text-[#afaaa6] '>
        {isclicked ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      {isclicked && (
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-[#45514f] text-[#afaaa6]'>
          {MenuData.map((link) => {
            return (
              <li
                key={link.id}
                className='px-4 cursor-pointer capitalize py-4 text-4xl'>
                {link.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
