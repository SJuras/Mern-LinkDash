import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
  return(
    <div className={isOpen ? 'grid grid-rows-4 text-center items-center z-30 transition-all ease-in duration-300 mt-7' : 'hidden'} onClick={toggle}>
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/">Home</Link>
    </div>
  );
}

export default Dropdown;
