import { useState } from "react";
import { Link } from "react-router";
import logo from "../src/assets/images/logo.png";
import name from "../src/assets/images/name.png";
import useOnlineStatus from "./components/useOnlineStatus";

const Headers = () => {
  // const [isLogIn, setIsLogIn] = useState(false);
  const [islogIn, setIsLogIn] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <nav className="bg-white border-gray-200 dark:bg-yellow-300/90 font-poppins">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "70px", height: "auto" }}
          />
          <img
            src={name}
            className="ml-0"
            style={{ width: "90px", height: "auto" }}
          />
        </div>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pink-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-pink-400 dark:hover:bg-pink-500 dark:focus:ring-yellow-300 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </label>

        <ul className="hidden peer-checked:flex flex-col absolute top-16 right-4 bg-yellow-300 p-4 rounded-lg shadow-lg space-y-3 md:space-y-0 md:static md:flex md:flex-row md:space-x-8 md:bg-transparent md:shadow-none items-center">
          <li className="block py-2 px-3 md:p-0 dark:text-white md:dark:hover:text-pink-500 hover:text-pink-500 transition-colors">
            Online Status {isOnline ? "🟢" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="block py-2 px-3  md:p-0 dark:text-white md:dark:hover:text-pink-500 hover:text-pink-500 transition-colors focus:text-pink-500 focus:underline focus:underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-3 md:p-0 dark:text-white md:dark:hover:text-pink-500 hover:text-pink-500 transition-colors focus:text-pink-500 focus:underline focus:underline-offset-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-3 md:p-0 dark:text-white md:dark:hover:text-pink-500 hover:text-pink-500 transition-colors focus:text-pink-500 focus:underline focus:underline-offset-8"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="block py-2 px-3 md:p-0 dark:text-white md:dark:hover:text-pink-500 hover:text-pink-500 transition-colors focus:text-pink-500 focus:underline focus:underline-offset-8"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block bg-pink-500/70 p-2 m-2 px-5 text-white rounded-full shadow-lg 
             hover:bg-yellow-300 hover:text-pink-500 cursor-pointer 
             text-center min-w-24 backdrop-blur-sm"
              onClick={() =>
                setIsLogIn(islogIn === "Login" ? "Logout" : "Login")
              }
            >
              {islogIn}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headers;
