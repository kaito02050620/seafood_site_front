import React from "react";
import { Link } from "react-router-dom";

function CreateRecipeButton() {
  return (
    <Link className="viewRecipeButton  button button:hover" to="/create">
      <div className="flex items-center">
        <p className="mr-2 md:text-lg text-sm">レシピを投稿する</p>
        <img
          src="https://seafoodcook.netlify.app/assets/image/cook.png"
          style={{
            width: "25px",
            display: "inline-block",
            margin: "auto",
            opacity: "0.9",
          }}
        />
      </div>
    </Link>
  );
}

export default CreateRecipeButton;
