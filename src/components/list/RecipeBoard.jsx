import React, { useContext } from "react";
import Marquee from "react-double-marquee";
import { Link } from "react-router-dom";
import LikeButton from "../button/Like";
import { AuthContext } from "../../state/AuthContext";

function RecipeBoard(recipe) {
  const { user } = useContext(AuthContext);
  //指定文字数を超える場合に「...」を表示させる
  function truncateText(text) {
    const MAX_LENGTH = 60;
    if (text.length > MAX_LENGTH) {
      return text.substring(0, MAX_LENGTH) + "...";
    } else {
      return text;
    }
  }

  //流れる文字実装の為、文字数取得
  const recipeTitleLength = recipe.title.length;

  return (
    <li className="relative sm:h-52 h-80 w-full sm:p-5 p-3 recipeListBoard mb-5 flex flex-col sm:flex-row items-center">
      <LikeButton recipe={recipe} />
      <div className="md:w-64 sm:w-56 w-fll sm:h-full h-36 sm:mb-0 mb-1 sm:px-0 px-7">
        <img
          className="w-full h-full object-cover"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="md:w-3/5 w-full sm:p-0 sm:max-w-xs md:ml-3 ml-2 h-full px-5">
        {recipeTitleLength > 20 ? (
          <div className=" whitespace-nowrap sm:mb-2 mb-1 md:text-xl sm:text-lg text-base text-center sm:px-0 px-5 md:pr-0 sm:pr-9">
            <Marquee
              direction="left"
              scrollWhen="always"
              speed={0.03}
              delay={1000}
            >
              <h3 className="inline-block font-bold">{recipe.title}</h3>
            </Marquee>
          </div>
        ) : (
          <div className=" w-full sm:mb-2 mb-1 md:text-xl sm:text-lg text-base sm:text-left text-center">
            <h3 className=" inline-block font-bold">{recipe.title}</h3>
          </div>
        )}
        <p className="w-full sm:p-0 px-2 md:text-base text-sm  md:pr-0 sm:pr-9">
          {truncateText(recipe.description)}
        </p>
      </div>
      <Link
        to={`/recipe/${recipe._id}`}
        className="viewRecipeButton absolute sm:bottom-5 bottom-2 sm:right-5 right-2  button button:hover"
      >
        作り方を見る
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </li>
  );
}

export default RecipeBoard;
