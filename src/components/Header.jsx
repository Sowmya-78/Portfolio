import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center p-4 shadow-md fixed w-full top-0 z-50"
      style={{ backgroundColor: '#DFF5E3' }}
    >
      <div className="text-2xl font-bold text-indigo-700">
        <Link to="/" className="hover:text-indigo-800 transition duration-300">
          Sowmya Teepireddy
        </Link>
      </div>
      
      <nav className="flex gap-6 text-xl text-gray-700">
        <Link to="/" className="hover:text-indigo-600 transition duration-300">
          <FaHome title="Home" />
        </Link>
        <Link to="/about" className="hover:text-indigo-600 transition duration-300">
          <FaUser title="About Me" />
        </Link>
        <Link to="/resume" className="hover:text-indigo-600 transition duration-300">
          <FaFileAlt title="Resume" />
        </Link>
        <Link to="/projects" className="hover:text-indigo-600 transition duration-300">
          <FaProjectDiagram title="Projects" />
        </Link>
        <Link to="/contact" className="hover:text-indigo-600 transition duration-300">
          <FaEnvelope title="Contact" />
        </Link>
      </nav>
    </header>
  );
}
