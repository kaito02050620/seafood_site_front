import React from "react";
import { recipeName } from "./select";

function RecipeSelect({ selectRecipe, setSelectRecipe }) {
  return (
    <>
      <div className="block relative md:w-48 sm:w-36 w-28 ">
        <select
          value={selectRecipe}
          onChange={(e) => setSelectRecipe(e.target.value)}
          className="block md:text-base text-sm appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 sm:px-4 px-1 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {recipeName.map((recipe) => {
            return (
              <option key={recipe} value={recipe}>
                {recipe}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default RecipeSelect;
