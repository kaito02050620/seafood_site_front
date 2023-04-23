import React, { useState } from "react";
import MyDropzoneBasic from "./Drop";
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

function InputImage({ image, setImage }) {
  const [preview, setPreview] = useState("");
  const imageDeleteButton = (e) => {
    e.preventDefault();
    setImage("");
  };

  return (
    <div className="text-center mb-5">
      <h2 htmlFor="recipeName" className="sm:text-lg text-base mb-2">
        料理画像<span className="text-red-600">*</span>
      </h2>
      <div className="bg-red-50 block m-auto sm:w-3/4 w-full sm:h-80 h-64 relative">
        {image === "" ? (
          <MyDropzoneBasic setImage={setImage} setPreview={setPreview} />
        ) : (
          <div className="w-full h-full object-cover overflow-hidden">
            <button
              onClick={imageDeleteButton}
              className="p-3 bg-red-200 absolute top-3 right-3"
            >
              削除
            </button>
            <img src={preview || PUBLIC_FOLDER + "/" + image}></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputImage;
