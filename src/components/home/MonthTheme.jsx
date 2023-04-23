import React from "react";
import { foodName } from "../select/select";
import CreateRecipeButton from "../button/CreateRecipe";

//配列取得　今の月を取得
const month = new Date().getMonth() + 1;
const [abstract, ...other] = foodName;
const randomNo = other.length - month * 2;
const theme = other[randomNo];

function MonthTheme() {
  return (
    <>
      <div className="sectionBoard md:ml-4 md:mt-0 sm:mt-4 mt-2 md:w-3/6 w-full lg:p-5 p-4">
        <h1 className="homeTitleFont">{`${month}月のお題`}</h1>
        <div className="w-full text-center">
          <p className="md:text-5xl text-xl md:mb-10 mb-5">{theme}</p>
          <CreateRecipeButton />
          <p className="mt-2 sm:text-base text-sm">
            お題の食材を使った料理をして投稿してみよう！
          </p>
        </div>
      </div>
    </>
  );
}

export default MonthTheme;
