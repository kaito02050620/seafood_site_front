import React from "react";

function Loading() {
  return (
    <>
      <div className="py-20">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circleShadow"></div>
          <div className="circleShadow"></div>
          <div className="circleShadow"></div>
          <span>読み込み中</span>
        </div>
      </div>
    </>
  );
}

export default Loading;
