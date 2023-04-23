import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu/Menu";
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-screen-xl my-0 mx-auto sm:pt-2 pt-1 lg:px-8 sm:px-6 px-3 z-50 w-full fixed top-0 right-1/2 translate-x-2/4">
      <div>
        <Link to="/" className="flex items-center button button:hover">
          <div className="lg:w-28 md:w-20 sm:w-16 w-14 md:mr-3 mr-1">
            <img src={PUBLIC_FOLDER + "/logo.png"} alt="海の味ロゴ" />
          </div>
          <h2 className="lg:text-3xl sm:text-xl text-sm font-bold  md:mr-3 mr-1">
            海の味
          </h2>
          <span className="lg:text-base sm:text-sm text-xs">
            ~海鮮晩ご飯サイト~
          </span>
        </Link>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
