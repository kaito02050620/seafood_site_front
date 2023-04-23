import React from "react";

function InputDescription({ description, setDescription }) {
  return (
    <div className="text-center sm:mb-10 mb-7">
      <label htmlFor="recipeName" className="sm:text-lg text-base block mb-2">
        料理について説明<span className="text-red-600">*</span>
      </label>
      <textarea
        value={description}
        className="block m-auto sm:w-3/4 w-full sm:h-24 h-32 p-2  border-gray-500 border-solid sm:text-base text-sm"
        id="recipeDescription"
        placeholder="例）釣りたて新鮮の大きなマグロです。家族全員で協力して解体ショー開催しました(笑)スーパーのマグロでも簡単に出来るレシピになっていますのでぜひ試してみてください。"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default InputDescription;
