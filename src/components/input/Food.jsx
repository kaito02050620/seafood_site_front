import React from "react";
import { BsTrash3 } from "react-icons/bs";

function InputFood({
  setPeople,
  foods,
  setFoods,
  ingredient,
  setIngredient,
  amount,
  setAmount,
}) {
  //何人前デフォルト値
  const howManyPeople = [1, 2, 3, 5];

  //材料削除
  const foodDelete = (e, No) => {
    e.preventDefault();
    const updateRecipe = foods.filter((food) => food.No !== No);
    updateRecipe.map((food, index) => (food.No = index + 1));
    setFoods(updateRecipe);
  };

  //材料追加
  const newFood = { No: foods.length + 1, food: ingredient, amount: amount };
  const addFoodButton = (e) => {
    e.preventDefault();
    if (ingredient === "" || amount === "") {
      alert("材料名と分量は必ずどちらも入力してください");
      return;
    }
    setFoods([...foods, newFood]);
    setIngredient("");
    setAmount("");
  };

  return (
    <>
      <div className="text-center sm:mb-10 mb-7">
        <div>
          <label htmlFor="foodName" className="block sm:text-lg text-base mb-2">
            材料名<span className="text-red-600">*</span>
          </label>
          <div className="w-24 m-auto relative mb-2">
            <select
              className="block relative appearance-none m-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="foodName"
              onChange={(e) => setPeople(e.target.value)}
            >
              {howManyPeople.map((people) => {
                return (
                  <option value={people} key={people}>
                    {people}人前
                  </option>
                );
              })}
            </select>
            <div className=" pointer-events-none absolute top-3 right-3 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div>
            <div>
              {foods.length === 0 ? (
                <p className="sm:w-3/4 w-full m-auto pb-2 bg-slate-200 p-2 mb-2">
                  まだ追加されていません
                </p>
              ) : (
                <ul className="sm:w-3/4 w-full m-auto items-center sm:text-base text-sm">
                  {foods.map((food) => {
                    return (
                      <li
                        className="sm:3/4 w-full flex items-center justify-between bg-slate-200 p-2 mr-3 mb-2"
                        key={food.No}
                      >
                        <div>
                          <p className="inline-block p-2 border-gray-500 border-solid mr-1 sm:text-base text-sm">
                            {food.No}
                          </p>
                          <p className="inline-block p-2 border-gray-500 border-solid mr-1 sm:text-base text-sm">
                            {food.food}
                          </p>
                          <p className="inline-block p-2 border-gray-500 border-solid mr-1 sm:text-base text-sm">
                            {food.amount}
                          </p>
                        </div>
                        <button
                          className="line-block ml-3 text-2xl font-bold button button:hover"
                          onClick={(e) => foodDelete(e, food.No)}
                        >
                          <BsTrash3 size={18} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="sm:w-3/4 w-full m-auto sm:flex items-center justify-between">
              <input
                className="w-2/5 inline-block p-2 border-gray-500 border-solid mr-1 sm:text-base text-sm"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="材料名入力"
                type="text"
              />
              <input
                className="w-2/5 inline-block p-2 border-gray-500 border-solid sm:text-base text-sm"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="分量入力"
                type="text"
              />
              <button
                className="block ml-1 viewRecipeButton button button:hover"
                onClick={addFoodButton}
              >
                追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputFood;
