import React from "react";
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

function Ranking() {
  return (
    <>
      <div className="sectionBoard p-5 relative">
        <div className="top-0 right-0 absolute w-full h-full z-10 bg-zinc-400 bg-opacity-70">
          <p className=" text-3xl h-full w-full flex justify-center items-center">
            今しばらくお待ちください...
          </p>
        </div>
        <h1 className="text-3xl mb-10">総合ランキング</h1>
        {/* <div className="justify-center">
          <div className="flex items-center justify-center mb-10">
            <p className="text-6xl">第一位&nbsp;&nbsp;</p>
            <strong className="inline-block text-8xl mr-10">海鮮丼</strong>
            <div className="w-80">
              <img src={PUBLIC_FOLDER + "/sasimi.jpg"} alt="" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-10">
              <p className="text-6xl">第二位&nbsp;&nbsp;</p>
              <strong className="inline-block text-8xl mr-10">ムニエル</strong>
              <div className="w-80">
                <img src={PUBLIC_FOLDER + "/sasimi.jpg"} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-10">
              <p className="text-6xl">第三位&nbsp;&nbsp;</p>
              <strong className="inline-block text-8xl mr-10">煮つけ</strong>
              <div className="w-80">
                <img src={PUBLIC_FOLDER + "/sasimi.jpg"} alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Ranking;
