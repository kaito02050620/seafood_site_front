import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";

function Menu() {
  const { user } = useContext(AuthContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  //画面幅取得
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //メニュー開閉
  const handleLinkClick = () => {
    setShowMenu(false);
  };

  //ログアウトボタン
  const logoutButton = (e) => {
    e.preventDefault();
    localStorage.removeItem("takenoko_seafood_user");
    alert("ログアウトしました");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div>
        {windowWidth <= 550 ? (
          <div className="sm:relative w-full">
            <button
              className={`focus:outline-none absolute top-3 right-2 z-10 w-9 h-9`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="w-full h-full relative">
                <div
                  className={`${
                    showMenu ? "closeBar" : ""
                  } absolute w-7 h-[2px] bg-slate-800 top-2 humbugerBar`}
                ></div>
                <div
                  className={`${
                    showMenu ? "closeBar" : ""
                  } absolute w-7 h-[2px] bg-slate-800 top-4 humbugerBar`}
                ></div>
                <div
                  className={`${
                    showMenu ? "closeBar" : ""
                  } absolute w-7 h-[2px] bg-slate-800 bottom-2 humbugerBar`}
                ></div>
              </div>
            </button>
            <div>
              <div
                className={`${
                  showMenu ? "bgOpen" : ""
                } humbugerBackground absolute top-0 left-0`}
                onClick={() => setShowMenu(!showMenu)}
              ></div>
              <div
                className={`${
                  showMenu ? "menuOpen" : ""
                } humbuger absolute top-0 left-1/4 w-full z-0`}
              >
                <div className="h-screen bg-[#DCBE74] bg-opacity-90 shadow-lg flex justify-center items-center">
                  <ul className="h-full flex flex-col justify-center items-center text-red-50 mr-20">
                    <li className="mb-8">
                      <Link
                        to="/"
                        onClick={handleLinkClick}
                        className="text-gray-800 text-xl"
                      >
                        ホームに戻る
                      </Link>
                    </li>
                    <li className="mb-8">
                      <Link
                        to="/siteDescription"
                        onClick={handleLinkClick}
                        className="text-gray-800 text-xl"
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
                            className="text-gray-800 text-xl"
                          >
                            個人ページ
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={(e) => logoutButton(e)}
                            className="text-gray-800 text-xl"
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
                            className="text-gray-800 text-xl"
                          >
                            新規登録（無料）
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            onClick={handleLinkClick}
                            className="text-gray-800 text-xl"
                          >
                            ログイン
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <nav>
            <ul className="flex">
              <li className="text-yellow-600 headerMenu button button:hover">
                <Link className="" to="/siteDescription">
                  海の味とは
                </Link>
              </li>
              {user ? (
                <>
                  <li className="headerMenu button button:hover">
                    <Link className="" to={`/user/${user._id}`}>
                      個人ページ
                    </Link>
                  </li>
                  <li className="headerMenu button button:hover">
                    <button onClick={(e) => logoutButton(e)}>ログアウト</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="headerMenu button button:hover">
                    <Link className="" to="/register">
                      新規登録（無料）
                    </Link>
                  </li>
                  <li className="headerMenu button button:hover">
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
