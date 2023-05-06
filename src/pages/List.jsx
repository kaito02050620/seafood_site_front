import React, { useState, createContext, useEffect } from "react";
import RecipeBoard from "../components/list/RecipeBoard";
import {
  RecipeSearch,
  recipeName,
  foodName,
  updateOrder,
} from "../components/list/RecipeSearch";
export const SearchState = createContext();
import ReactPaginate from "react-paginate";
import axios from "axios";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectRecipe, setSelectRecipe] = useState(recipeName[0]);
  const [selectFood, setSelectFood] = useState(foodName[0]);
  const [selectUpdateOrder, setSelectUpdateOrder] = useState(updateOrder[0]);
  const [offset, setOffset] = useState(0);
  const perPage = 5;
  const [searchState, setSearchState] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("searchState")) || {
        recipe: "料理名",
        food: "海鮮名",
        date: "新しい順",
      }
    );
  });

  //DBからレシピリストを取得
  useEffect(() => {
    const getRecipes = async () => {
      const res = await axios.get(API_SERVER + "/posts/allRecipe");
      setRecipes(res.data);
    };
    getRecipes();
  }, []);

  //ローカルストレージの検索データを取得
  useEffect(() => {
    setSearchState(
      JSON.parse(localStorage.getItem(`searchState`)) || {
        recipe: "料理名",
        food: "海鮮名",
        date: "新しい順",
      }
    );
  }, [setSearchState]);

  useEffect(() => {
    setSearchState((prev) => ({
      ...prev,
      recipe: prev.recipe || selectRecipe,
      food: prev.food || selectFood,
      date: prev.date || selectUpdateOrder,
    }));
  }, [selectRecipe, selectFood, selectUpdateOrder, setSearchState]);

  let searchParams = {
    recipe: selectRecipe,
    food: selectFood,
    date: selectUpdateOrder,
  };
  //検索ボタン,ローカルストレージ更新
  const SearchButton = (e) => {
    e.preventDefault;
    localStorage.setItem("searchState", JSON.stringify(searchParams));
    setSearchState(JSON.parse(localStorage.getItem(`searchState`)));
  };

  //検索リセットボタン
  const ResetButton = (e) => {
    e.preventDefault;
    const defaultSearchState = {
      recipe: "料理名",
      food: "海鮮名",
      date: "新しい順",
    };
    localStorage.setItem("searchState", JSON.stringify(defaultSearchState));
    setSearchState(defaultSearchState);
  };

  //日付をDateオブジェクトに変換
  const changeData = () => {
    recipes.forEach((recipe) => {
      recipe.date = new Date(recipe.createdAt);
    });
  };

  //日付順にソート処理
  const UpdateSearch = recipes.sort((a, b) => {
    changeData();
    if (searchState.date !== "新しい順") {
      return a.date - b.date;
    } else {
      return b.date - a.date;
    }
  });

  //料理名と海鮮名の選択による処理
  const filterRecipe = UpdateSearch.filter((recipe) => {
    const defaultRecipe = searchState.recipe === "料理名";
    const defaultName = searchState.food === "海鮮名";
    const selectedRecipe = recipe.category.includes(searchState.recipe);
    const selectedName = recipe.seafoods
      .map((item) => item.seafood)
      .includes(searchState.food);
    if (defaultRecipe && defaultName) {
      return true;
    } else if (selectedRecipe && defaultName) {
      return true;
    } else if (selectedName && defaultRecipe) {
      return true;
    } else if (selectedRecipe && selectedName) {
      return true;
    } else return false;
  });

  //料理名と海鮮名の選択による処理
  const searchRecipe = filterRecipe
    .slice(offset, offset + perPage)
    .map((recipe) => {
      return <RecipeBoard key={recipe._id} {...recipe} />;
    });

  //ページネーション選択処理
  const handlePageChange = (data) => {
    let page_number = data["selected"];
    setOffset(page_number * perPage);
  };

  return (
    <div className="sectionBoard w-full lg:p-5 p-4 ">
      <h1 className="homeTitleFont">レシピ一覧</h1>
      <SearchState.Provider
        value={[
          selectRecipe,
          setSelectRecipe,
          selectFood,
          setSelectFood,
          selectUpdateOrder,
          setSelectUpdateOrder,
          searchState,
        ]}
      >
        <RecipeSearch />
      </SearchState.Provider>
      <div className="w-full flex items-center justify-center mt-3">
        <button
          className=" block sm:w-80 w-[250px] md:p-3 p-2 mr-2 bg-red-500 bg-opacity-60 rounded-sm border-solid border-gray-800 border sm:text-base text-sm button button:hover"
          onClick={(e) => SearchButton(e)}
        >
          条件に合うレシピを表示
        </button>
        <button
          className=" block w-[140px] md:p-2 p-1  bg-red-50 bg-opacity-60 rounded-sm border-solid border-gray-800 border  sm:text-base text-sm button button:hover"
          onClick={(e) => ResetButton(e)}
        >
          条件リセット
        </button>
      </div>
      <ul className="md:mt-11 sm:mt-5 mt-3">
        {searchRecipe.length === 0 ? (
          <h2 className=" sm:text-2xl text-lg my-6 text-center">
            条件に合うレシピは投稿されていません。
          </h2>
        ) : (
          searchRecipe
        )}
      </ul>
      <ReactPaginate
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline button button:hover"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        }
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline  button button:hover"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        breakLabel={"..."}
        pageCount={Math.ceil(filterRecipe.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={handlePageChange}
        containerClassName={"flex items-center justify-center mt-8 mb-4"}
        pageClassName={
          "m-1 w-7 h-10 rounded-sm border border-gray-800 button button:hover"
        }
        pageLinkClassName={"px-2 py-3 leading-10 button button:hover"}
        activeClassName={"bg-white bg-opacity-50"}
        previousClassName={"m-1 w-7 h-10 rounded-sm border border-gray-800"}
        nextClassName={"m-1 w-7 h-10 rounded-sm border border-gray-800"}
        previousLinkClassName={"px-1 py-2 leading-9"}
        nextLinkClassName={"px-1 py-3 leading-9"}
      />
    </div>
  );
}

export default RecipeList;
