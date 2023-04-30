import React from "react";
import { foodName } from "./select";
import { useEffect } from "react";

function FoodSelect({ selectFood, setSelectFood, searchState }) {
  useEffect(() => {
    setSelectFood(searchState.food);
  }, [searchState.food]);
  return (
    <>
      <div className="md:w-48 sm:w-36 w-28 mx-2">
        <p className="sm:text-sm text-xs">使用食材：</p>
        <div className="block relative ">
          <select
            value={selectFood}
            onChange={(e) => setSelectFood(e.target.value)}
            className="block md:text-base text-sm appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 sm:px-4 px-1 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {foodName.map((food) => {
              return <option key={food}>{food}</option>;
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
      </div>
    </>
  );
}

export default FoodSelect;
