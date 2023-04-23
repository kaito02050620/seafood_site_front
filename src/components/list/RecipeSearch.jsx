import { useContext } from "react";
import React from "react";
import FoodSelect from "../select/foodSelect";
import UpdateSelect from "../select/updateSelect";
import { SearchState } from "../../pages/List";
import { recipeName, foodName, updateOrder } from "../select/select";
import RecipeSelect from "../select/recipeSelect";

const RecipeSearch = () => {
  const [
    selectRecipe,
    setSelectRecipe,
    selectFood,
    setSelectFood,
    selectUpdateOrder,
    setSelectUpdateOrder,
  ] = useContext(SearchState);

  return (
    <>
      <div className="flex md:justify-between justify-center  max-w-2xl mx-auto my-0">
        <RecipeSelect
          selectRecipe={selectRecipe}
          setSelectRecipe={setSelectRecipe}
        />
        <FoodSelect selectFood={selectFood} setSelectFood={setSelectFood} />
        <UpdateSelect
          selectUpdateOrder={selectUpdateOrder}
          setSelectUpdateOrder={setSelectUpdateOrder}
        />
      </div>
    </>
  );
};

export { recipeName, foodName, updateOrder, RecipeSearch };
