import axios from "axios";
import React, { useEffect, useState } from "react";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function Ranking() {
  const [ranking, setRanking] = useState([]);

  //人気レシピの上位３位までを取得
  useEffect(() => {
    const getRanking = async () => {
      const res = await axios.get(API_SERVER + "/posts/ranking");
      setRanking(res.data);
    };
    getRanking();
  }, []);

  return (
    <>
      <div className="sectionBoard w-full lg:p-5 p-4 relative">
        <h1 className="homeTitleFont">総合ランキング</h1>
        <div className=" sm:w-9/12 w-11/12 m-auto">
          <div className="flex sm:flex-wrap flex-wrap-reverse items-center justify-between mb-14">
            <div className="sm:w-1/2 w-full sm:px-5 px-2">
              <img
                className="w-full"
                src={ranking[0] && ranking[0].image}
                alt={ranking[0] && ranking[0].title}
              />
            </div>
            <div className="sm:w-1/2 w-full md:p-5 sm:p-3 p-2 relative">
              <p className="md:text-3xl sm:text-xl text-base">第1位</p>
              <p className="md:text-3xl sm:text-xl text-base bold">
                {ranking[0] && ranking[0].title}
              </p>
            </div>
          </div>

          <div className="flex sm:flex-wrap flex-wrap-reverse items-center justify-between mb-14">
            <div className="sm:w-1/2 w-full sm:px-5 px-2">
              <img
                className="w-full"
                src={ranking[1] && ranking[1].image}
                alt={ranking[1] && ranking[1].title}
              />
            </div>
            <div className="sm:w-1/2 w-full md:p-5 sm:p-3 p-2 relative">
              <p className="md:text-3xl sm:text-xl text-base">第1位</p>
              <p className="md:text-3xl sm:text-xl text-base bold">
                {ranking[1] && ranking[1].title}
              </p>
            </div>
          </div>

          <div className="flex sm:flex-wrap flex-wrap-reverse items-center justify-between mb-14">
            <div className="sm:w-1/2 w-full sm:px-5 px-2">
              <img
                className="w-full"
                src={ranking[2] && ranking[2].image}
                alt={ranking[2] && ranking[2].title}
              />
            </div>
            <div className="sm:w-1/2 w-full md:p-5 sm:p-3 p-2 relative">
              <p className="md:text-3xl sm:text-xl text-base">第1位</p>
              <p className="md:text-3xl sm:text-xl text-base bold">
                {ranking[2] && ranking[2].title}
              </p>
            </div>
          </div>
        </div>
        <div className=" absolute top-0 left-0 w-full h-full bg-slate-600 opacity-90 text-gray-300 text-3xl text-center pt-40">
          準備中
        </div>
      </div>
    </>
  );
}

export default Ranking;
