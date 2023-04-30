import React from "react";
import { Link } from "react-router-dom";
import { GiCook } from "react-icons/gi";

function CreateRecipeButton() {
  return (
    <Link className="viewRecipeButton  button button:hover" to="/create">
      <div className="flex items-center">
        <p className="mr-2 md:text-lg text-sm">レシピを投稿する</p>
        <GiCook
          size={25}
          style={{ display: "inline-block", margin: "auto", opacity: "0.9" }}
        />
      </div>
    </Link>
  );
}

export default CreateRecipeButton;
