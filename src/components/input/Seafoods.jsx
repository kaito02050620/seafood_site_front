import React from "react";
import { foodName } from "../select/select";
import { BsTrash3 } from "react-icons/bs";

function InputSeaFoods({ seaFoods, setSeaFoods, seaFood, setSeaFood }) {
  //海鮮削除
  const seaFoodDelete = (e, No) => {
    e.preventDefault();
    const updateSeafoods = seaFoods.filter((seafood) => seafood.No !== No);
    updateSeafoods.map((seafood, index) => (seafood.No = index + 1));
    setSeaFoods(updateSeafoods);
  };

  //海鮮追加
  const newSeaFood = { No: seaFoods.length + 1, seafood: seaFood };
  const addSeaFood = (e) => {
    e.preventDefault();
    if (seaFood === "") {
      alert("この海鮮は追加出来ません。");
      return;
    } else if (seaFood === "海鮮名") {
      alert("この海鮮は追加出来ません。");
      return;
    }

    for (let i = 0; i < seaFoods.length; i++) {
      if (seaFoods[i].seafood === seaFood) {
        alert("すでに追加された海鮮です。");
        return;
      }
    }

    setSeaFoods([...seaFoods, newSeaFood]);
  };

  return (
    <div className="text-center sm:mb-10 mb-7">
      <div>
        <h2 htmlFor="recipeName" className="sm:text-lg text-base mb-2">
          メインの海鮮<span className="text-red-600">*</span>
        </h2>
      </div>
      <div className="py-1">
        {seaFoods.length === 0 ? (
          <p className="sm:w-3/4 w-full m-auto pb-2 bg-slate-200 p-2 mb-2 text-sm">
            まだ追加されていません
            <br />
            ※削除する事ができるので一度入力してみましょう！
          </p>
        ) : (
          <ul className="sm:w-3/4 w-full m-auto flex justify-start items-center flex-wrap sm:text-base text-sm">
            {seaFoods.map((food) => {
              return (
                <li
                  className="flex items-center bg-slate-200 p-2 mr-3 mb-2"
                  key={food.No}
                >
                  <p className="inline-block">{food.seafood}</p>
                  <button
                    className="line-block ml-3 text-2xl font-bold button button:hover"
                    onClick={(e) => seaFoodDelete(e, food.No)}
                  >
                    <BsTrash3 size={18} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex justify-between items-center max-w-xs m-auto">
        <div className="w-2/3 m-auto relative">
          <select
            value={seaFood}
            onChange={(e) => setSeaFood(e.target.value)}
            className="block relative appearance-none m-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline sm:text-base text-sm"
          >
            {foodName.map((food) => {
              return (
                <option key={food} value={food}>
                  {food}
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
        <button
          className="viewRecipeButton button button:hover"
          onClick={addSeaFood}
        >
          追加
        </button>
      </div>
    </div>
  );
}

export default InputSeaFoods;
