import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';
import img from '../assets/donut.png';

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const login = () => {
    console.log("Navigating to login page");
    navigate('/login');
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to={'/'} >
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src={img} alt="logo" className="h-8 w-8" />
          </span>
          <span className="font-bold">DeliciousBook</span>
        </div>
        </Link>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <a
                href="/"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
                <span></span>
              </a>
            </li>
            <li>
              <a
                href="/upload"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Upload Recipe
                <span></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {!currentUser ? (
            <button
              onClick={login}
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </button>
          ) : (
            <button
              onClick={logout}
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log Out
            </button>
          )}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="px-4 py-2">
            <li>
              <a
                href="/"
                className="block py-2 text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/upload"
                className="block py-2 text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Upload Recipe
              </a>
            </li>
            <li>
              {!currentUser ? (
                <button
                  onClick={login}
                  type="button"
                  className="block w-full text-left py-2 text-sm font-semibold text-black hover:bg-black/10"
                >
                  Log In
                </button>
              ) : (
                <button
                  onClick={logout}
                  type="button"
                  className="block w-full text-left py-2 text-sm font-semibold text-black hover:bg-black/10"
                >
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
