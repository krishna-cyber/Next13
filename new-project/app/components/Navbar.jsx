/** @format */

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=' bg-slate-600 p-2'>
      <Link className=' font-bold text-white text-lg' href='/'>
        WikiRocket!
      </Link>
    </nav>
  );
};

export default Navbar;
