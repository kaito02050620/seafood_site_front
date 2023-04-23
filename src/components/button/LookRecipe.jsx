import React from "react";
import { Link } from "react-router-dom";
import { GiBowlOfRice } from "react-icons/gi";

function LookRecipeButton() {
  return (
    <Link className=" viewRecipeButton" to="/recipeList">
      <div className="flex items-center">
        <p className="mr-2 md:text-lg text-sm">レシピを見る</p>
        <GiBowlOfRice
          size={25}
          style={{ display: "inline-block", margin: "auto", opacity: "0.9" }}
        />
      </div>
    </Link>
  );
}

export default LookRecipeButton;
