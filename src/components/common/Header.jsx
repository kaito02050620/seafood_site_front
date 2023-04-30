import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu/Menu";
import { useEffect, useState } from "react";
const imageFolder = "../";

const Header = () => {
  const [scrollClass, setScrollClass] = useState("");

  //スクロール検知してクラス付与
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScrollClass("scrolled");
      } else {
        setScrollClass("");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrollClass} open fixed w-full md:h-20 sm:h-20 h-16 z-[1000]`}
    >
      <div
        className={`flex items-center justify-between max-w-screen-xl my-0 mx-auto sm:py-2 py-1 lg:px-8 sm:px-6 px-3 z-50 w-full fixed top-0 right-1/2 translate-x-2/4`}
      >
        <div>
          <Link to="/" className="flex items-center button button:hover">
            <div className="lg:w-16 md:w-16 sm:w-16 w-14 md:mr-3 mr-1">
              <img
                src="../../../public/assets/image/logo.png"
                alt="海の味ロゴ"
              />
            </div>
            <h2 className="lg:text-2xl sm:text-xl text-sm font-bold  md:mr-3 mr-1">
              海の味
            </h2>
            <span className="lg:text-base sm:text-sm text-xs">
              ~海鮮晩ご飯サイト~
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
