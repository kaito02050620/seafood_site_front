import React from "react";
import { recipeName } from "../select/select";

function InputCategory({ category, setCategory }) {
  return (
    <div className="text-center sm:mb-10 mb-7">
      <h2 htmlFor="recipeName" className="sm:text-lg text-base mb-2">
        料理のカテゴリ
        <span className="text-red-600">*</span>
      </h2>
      <div className=" max-w-xs m-auto relative">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block relative appearance-none m-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline sm:text-base text-sm"
        >
          {recipeName.map((recipe) => {
            return (
              <option key={recipe} value={recipe}>
                {recipe}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute top-3 right-3 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default InputCategory;
