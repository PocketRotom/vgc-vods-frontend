import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo512.png" alt="App Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-lg font-semibold">VGC Vods</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
