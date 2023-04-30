import React from "react";
import { BsTrash3 } from "react-icons/bs";

function InputCook({ cooks, setCooks, recipe, setRecipe }) {
  //作り方削除
  const recipeDelete = (e, No) => {
    e.preventDefault();
    const updateCooks = cooks.filter((cook) => cook.No !== No);
    updateCooks.map((cook, index) => (cook.No = index + 1));
    setCooks(updateCooks);
  };

  //作り方追加
  const newCooks = { No: cooks.length + 1, recipe: recipe };
  const addRecipe = (e) => {
    e.preventDefault();
    if (recipe === "") {
      alert("入力欄が空です");
      return;
    }
    setCooks([...cooks, newCooks]);
    setRecipe("");
  };

  return (
    <div>
      <div className="text-center sm:mb-10 mb-7">
        <label htmlFor="foodName" className="sm:text-lg text-base block mb-2">
          作り方<span className="text-red-600">*</span>
        </label>
        <div>
          <div>
            {cooks.length === 0 ? (
              <p className="sm:w-3/4 w-full m-auto pb-2 bg-slate-200 p-2 mb-2">
                まだ追加されていません
              </p>
            ) : (
              <ul className="sm:w-3/4 w-full m-auto items-center sm:text-base text-sm">
                {cooks.map((cook) => {
                  return (
                    <li
                      className="sm:3/4 w-full flex items-center justify-between bg-slate-200 p-2 mr-3 mb-2"
                      key={cook.No}
                    >
                      <div>
                        <p className="inline-block p-2 border-gray-500 border-solid mr-1 sm:text-base text-sm">
                          {cook.No}
                        </p>
                        <p className="inline-block p-2 border-gray-500 border-solid mr-1 sm:text-base text-sm">
                          {cook.recipe}
                        </p>
                      </div>
                      <button
                        className="line-block ml-3 text-2xl font-bold button button:hover"
                        onClick={(e) => recipeDelete(e, cook.No)}
                      >
                        <BsTrash3 size={18} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="w-3/4 m-auto flex justify-between items-center">
            <textarea
              className="block w-4/5 m-auto h-10 p-2  border-gray-500 border-solid sm:text-base text-sm"
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
              placeholder="作り方を入力しましょう"
            />
            <button
              className="block ml-1 viewRecipeButton  button button:hover"
              onClick={addRecipe}
            >
              追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputCook;
