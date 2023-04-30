import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollTop from "./location/ScrollTop";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import SiteDescription from "./pages/SiteDescription";
import RecipeLists from "./pages/List";
import Register from "./pages/Register";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import User from "./pages/UserEdit";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import { AuthContext } from "./state/AuthContext";
import ScrollToTop from "react-scroll-up";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { useEffect } from "react";

const App = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  //特定ページ以外に画面遷移した際に検索条件を破棄する
  useEffect(() => {
    if (
      location.pathname !== "/recipeList" &&
      !location.pathname.startsWith("/recipe/")
    ) {
      localStorage.removeItem("searchState");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[url('../public/assets/image/background.png')] bg-cover bg-repeat w-full h-full">
        <Header />
        <main className="max-w-screen-xl mx-auto sm:pt-20 pt-16 lg:mb-52 md:mb-28 sm:mb-16 mb-10 lg:px-8 sm:px-6 px-3">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/siteDescription" element={<SiteDescription />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/recipeList" element={<RecipeLists />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route
              path="/create"
              element={user ? <CreateRecipe /> : <Navigate to="/login" />}
            />
            <Route
              path="/edit/:id"
              element={user ? <EditRecipe /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/user/:id"
              element={user ? <User /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTop
        showUnder={500}
        StopPosition={0}
        ShowAtPosition={100}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        style={{
          zIndex: "999",
          bottom: "30px",
          color: "#D97706",
        }}
      >
        <IoArrowUpCircleSharp size={40} style={{ opacity: 0.6 }} />
      </ScrollToTop>
    </>
  );
};

export default App;
