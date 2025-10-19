import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center bg-white shadow px-8 py-4 sticky top-0">
    <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
    <div className="space-x-6">
      <Link to="/" className="hover:text-indigo-500">Home</Link>
      <Link to="/about" className="hover:text-indigo-500">About</Link>
      <Link to="/projects" className="hover:text-indigo-500">Projects</Link>
      <Link to="/contact" className="hover:text-indigo-500">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
