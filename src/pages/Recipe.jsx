import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get(API_SERVER + "/posts/" + id);
      setRecipe(res.data[0]);
    };
    getRecipe();
  }, []);

  if (recipe === null) {
    return <p>読み込み中...</p>;
  }

  return (
    <div className="sectionBoard md:p-16 sm:p-8 p-4">
      <div className=" sm:p-5 p-3 recipeListBoard">
        <div className=" w-full sm:mb-7 mb-3 md:text-2xl sm:text-xl text-lg">
          <h1 className="w-full text-center font-bold">{recipe.title}</h1>
        </div>
        <div className=" w-full p-0 m-auto sm:mb-3 mb-2 object-cover">
          <img src={PUBLIC_FOLDER + "/" + recipe.image} alt={recipe.title} />
        </div>
        <div className="w-full m-auto mb-3">
          <h2 className="mb-2 sm:text-lg text-base">◆レシピ投稿者より</h2>
          <p className="sm:text-base text-sm">{recipe.description}</p>
        </div>
        <div className="w-full m-auto mb-3">
          <h2 className="mb-2 sm:text-lg text-base">
            ◆材料&nbsp;{recipe.people}人前
          </h2>
          <ul>
            {recipe.foods.map((item) => {
              return (
                <li className="mb-2 sm:w-3/4 w-4/5 m-auto" key={item._id}>
                  <div className="flex justify-between border-b border-current sm:text-base text-sm">
                    <p>{item.food}</p>
                    <p>{item.amount}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full m-auto sm:mb-3 mb-2">
          <h2 className="mb-2 sm:text-lg text-base">◆作り方</h2>
          <ul>
            {recipe.recipes.map((item) => {
              return (
                <li className="mb-2 w-3/4 m-auto" key={item._id}>
                  <p className="border-b border-current sm:text-base text-sm">
                    {`${item.No}. ${item.recipe}`}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
