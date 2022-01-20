import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
  return(
    <div className={isOpen ? 'grid grid-rows-4 fixed top-1 left-0 w-full text-center items-center z-30 transition-all ease-in duration-300 mt-7 bg-white' : 'hidden'} onClick={toggle}>
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/">Social Media</Link>
      <Link className="p-4" to="/">Digital Marketing</Link>
      <Link className="p-4" to="/">Contact</Link>
    </div>
  );
}

export default Dropdown;
