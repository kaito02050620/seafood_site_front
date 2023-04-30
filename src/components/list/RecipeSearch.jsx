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
    searchState,
  ] = useContext(SearchState);

  return (
    <>
      <div className="flex md:justify-between justify-center  max-w-2xl mx-auto my-0">
        <RecipeSelect
          selectRecipe={selectRecipe}
          setSelectRecipe={setSelectRecipe}
          searchState={searchState}
        />
        <FoodSelect
          selectFood={selectFood}
          setSelectFood={setSelectFood}
          searchState={searchState}
        />
        <UpdateSelect
          selectUpdateOrder={selectUpdateOrder}
          setSelectUpdateOrder={setSelectUpdateOrder}
          searchState={searchState}
        />
      </div>
    </>
  );
};

export { recipeName, foodName, updateOrder, RecipeSearch };
