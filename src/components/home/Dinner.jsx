import React, { useState } from "react";
import { recipeName } from "../select/select";
import ImageSlider from "./ImageSlider";
import LookRecipeButton from "../button/LookRecipe";
import ChangeRecipeButton from "../button/ChangeRecipe";

function Dinner() {
  //ランダムにレシピを取得する
  const [abstract, ...other] = recipeName;
  const randomRecipe = other[Math.floor(Math.random() * other.length)];

  const [cook, setCook] = useState(randomRecipe);

  //料理名切り替えボタン
  function changeRecipeButton(e) {
    e.preventDefault;
    const randomRecipe = other[Math.floor(Math.random() * other.length)];
    setCook(randomRecipe);
  }

  return (
    <>
      <div className="sectionBoard md:w-3/5 w-full lg:p-5 p-4">
        <h1 className="homeTitleFont">今夜の晩御飯</h1>
        <div className="flex items-center justify-center">
          <div className="w-1/2 text-center md:mr-2 sm:mr-1 mr-0.5">
            <p className="lg:text-5xl md:text-3xl text-xl md:mb-8 mb-1">
              {cook}
            </p>
            <div className=" mb-3">
              <ChangeRecipeButton
                className="block"
                changeRecipeButton={changeRecipeButton}
              />
            </div>
            <div>
              <LookRecipeButton />
            </div>
          </div>
          <div className="w-1/2">
            <div className="xl:w-72 lg:w-52 md:w-48 sm:w-40 w-36 ">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dinner;
