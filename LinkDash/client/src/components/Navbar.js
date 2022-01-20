import React from 'react';
import { Link } from 'react-router-dom';

import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = ({toggle}) => {
  return(
    <nav className="w-full relative flex justify-between items-center px-5 py-3 z-40" role="navigation">
      <Link to="/" className="pl-4">LinkDash</Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <HiMenuAlt3 fontSize={24} />
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
