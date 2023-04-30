import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function PageBackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center mb-1  button button:hover"
      >
        <IoIosArrowBack size={25} />
        <p className="sm:text-base text-sm">前のページに戻る</p>
      </button>
    </>
  );
}

export default PageBackButton;
