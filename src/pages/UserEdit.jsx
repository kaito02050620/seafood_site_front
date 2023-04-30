import React, { useContext, useEffect, useState } from "react";
import UserRecipe from "../components/edit/UserRecipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateRecipeButton from "../components/button/CreateRecipe";
import { AuthContext } from "../state/AuthContext";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function User() {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  //ユーザーが投稿したレシピを取得
  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(
        API_SERVER + "/posts/private/" + user._id
      );
      setRecipes(response.data);
    };
    getRecipes();
  }, []);

  //画面幅取得する
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  //退会処理
  const deleteUserButton = async (e) => {
    e.preventDefault();
    if (
      confirm(
        "これまでに投稿したデータがすべて消去されます。本当に退会しますか？"
      )
    ) {
      alert("ユーザー情報と投稿したデータを削除しました");
      localStorage.removeItem("takenoko_seafood_user");
      localStorage.removeItem("searchState");
      await axios.delete(API_SERVER + "/users/" + user._id);
      window.location.reload();
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <div className="sectionBoard md:py-16 sm:py-8 p-4">
      <h1 className="md:text-3xl text-lg text-center md:mb-16 sm:mb-8 mb-4">{`個人ページ（${user.username}）`}</h1>
      <div className="text-center md:mb-12 sm:mb-8 mb-4">
        <CreateRecipeButton />
      </div>
      <div className="max-w-3xl bg-white bg-opacity-80 rounded-sm shadow-md md:p-10 sm:p-7 p-4 m-auto">
        <div className="w-full flex border-b border-current pb-2">
          {width < 768 ? (
            <p className="w-full text-center text-xl">レシピ一覧</p>
          ) : (
            <>
              <p className="w-3/5 text-xl text-center">レシピ名</p>
              <p className="w-1/5 text-xl text-center">投稿日</p>
            </>
          )}
        </div>
        <ul className="mt-5">
          {recipes.length == 0 ? (
            <p className="text-center">投稿がありません。</p>
          ) : (
            recipes.map((recipe) => {
              return <UserRecipe key={recipe._id} {...recipe} />;
            })
          )}
        </ul>
      </div>
      <button
        onClick={(e) => deleteUserButton(e)}
        className="bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border block mx-auto mt-10 button button:hover"
      >
        海の味から退会する
      </button>
    </div>
  );
}

export default User;
