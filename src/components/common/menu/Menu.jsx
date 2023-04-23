import React, { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";
import { HiBars4 } from "react-icons/hi2";

function Menu() {
  const nodeRef = useRef();
  const { user } = useContext(AuthContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const logoutButton = (e) => {
    e.preventDefault();
    console.log("ss");
    localStorage.removeItem("takenoko_seafood_user");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div>
        {windowWidth <= 550 ? (
          <div className="sm:relative w-full">
            <button
              className={`focus:outline-none absolute top-3 right-2 z-10`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <HiBars4
                className={`w-8 h-8  ${showMenu ? " bg-gray-300" : ""}`}
              />
            </button>
            <CSSTransition
              in={showMenu}
              timeout={500}
              classNames="slide-right"
              unmountOnExit
              nodeRef={nodeRef}
            >
              <div className="absolute top-0 left-1/4 w-full z-0">
                <div className="h-screen bg-yellow-700 bg-opacity-80 shadow-lg flex justify-center items-center">
                  <ul className="h-full flex flex-col justify-center items-center text-red-50 mr-20">
                    <li className="mb-8">
                      <Link
                        to="/siteDescription"
                        onClick={handleLinkClick}
                        className="text-lime-50 text-xl"
                      >
                        海の味とは
                      </Link>
                    </li>
                    {user ? (
                      <>
                        <li className="mb-8">
                          <Link
                            to={`/user/${user._id}`}
                            onClick={handleLinkClick}
                            className="text-lime-50 text-xl"
                          >
                            個人ページ
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={(e) => logoutButton(e)}
                            className="text-lime-50 text-xl"
                          >
                            ログアウト
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="mb-8">
                          <Link
                            to="/register"
                            onClick={handleLinkClick}
                            className="text-lime-50 text-xl"
                          >
                            新規登録（無料）
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            onClick={handleLinkClick}
                            className="text-lime-50 text-xl"
                          >
                            ログイン
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          </div>
        ) : (
          <nav>
            <ul className="flex">
              <li className="text-yellow-600 headerMenu">
                <Link className="" to="/siteDescription">
                  海の味とは
                </Link>
              </li>
              {user ? (
                <>
                  <li className="headerMenu">
                    <Link className="" to={`/user/${user._id}`}>
                      個人ページ
                    </Link>
                  </li>
                  <li className="headerMenu">
                    <button onClick={(e) => logoutButton(e)}>ログアウト</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="headerMenu">
                    <Link className="" to="/register">
                      新規登録（無料）
                    </Link>
                  </li>
                  <li className="headerMenu">
                    <Link className="" to="/login">
                      ログイン
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default Menu;
