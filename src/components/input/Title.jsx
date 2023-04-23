import React from "react";

function InputTitle({ title, setTitle }) {
  return (
    <div className="text-center sm:mb-10 mb-7">
      <label htmlFor="recipeName" className="sm:text-lg text-base block mb-2">
        料理名<span className="text-red-600">*</span>
      </label>
      <input
        className="block m-auto sm:w-3/4 w-full p-2 border-gray-500 border-solid sm:text-base text-sm"
        value={title}
        id="recipeName"
        placeholder="料理名を入力してください"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default InputTitle;
