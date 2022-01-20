import React from 'react';
import { Link } from 'react-router-dom';

import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = ({toggle}) => {
  return(
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center px-2 md:px-5 py-3 z-40" role="navigation">
      <Link to="/" className="pl-4">LinkDash</Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <HiMenuAlt3 fontSize={24} />
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/">Social Media</Link>
        <Link className="p-4" to="/">Digital Marketing</Link>
        <Link className="p-4" to="/">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
