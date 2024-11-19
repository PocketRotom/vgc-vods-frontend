import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/use-login";
import Cookies from "js-cookie";

const NavBar: React.FC = function NavBar() {
  const isLoggedIn = useLogin((state) => state.isLoggedIn);
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  function logout() {
    setIsLoggedIn(false);
    Cookies.remove("token");
    navigate("/login");
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white text-lg font-semibold flex items-center"
          >
            <img src="/logo512.png" alt="App Logo" className="h-8 w-8 mr-2" />
            <span>VGC Vods</span>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          {!isLoggedIn ? (
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          ) : (
            <>
              <Link to="/addMatch" className="text-gray-300 hover:text-white">
                Add Match
              </Link>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
