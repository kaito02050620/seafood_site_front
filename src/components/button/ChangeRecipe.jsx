import React from "react";
import { RxUpdate } from "react-icons/rx";

function ChangeRecipeButton({ changeRecipeButton }) {
  return (
    <>
      <button
        className=" viewRecipeButton  button button:hover"
        onClick={(e) => changeRecipeButton(e)}
      >
        <div className="flex items-center">
          <p className="mr-2 md:text-lg text-sm">晩御飯変更</p>
          <RxUpdate
            size={25}
            style={{ display: "inline-block", margin: "auto", opacity: "0.9" }}
          />
        </div>
      </button>
    </>
  );
}

export default ChangeRecipeButton;
