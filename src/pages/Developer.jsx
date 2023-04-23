import React from "react";
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

const Developer = () => {
  return (
    <div className="sectionBoard md:py-16 sm:py-8 py-4">
      <h1 className="md:text-3xl text-lg text-center md:mb-16 sm:mb-8 mb-4">
        サイト開発者について
      </h1>
      <div className="md:flex justify-between px-5 md:w-[740px] mx-auto">
        <div>
          <div className="md:w-80 sm:w-72 w-60 shadow-xl mx-auto mb-8">
            <img src={PUBLIC_FOLDER + "/takenoko.png"} alt="ﾀｹﾉｺ画像" />
          </div>
        </div>
        <div className="md:w-80 w-full">
          <ul>
            <li className="mb-4 md:text-left text-center">
              <p className="inline-block">名前&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block">ﾀｹﾉｺ</p>
            </li>
            <li className="mb-4  md:text-left text-center">
              <p className="inline-block">出身地&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block">岩手県</p>
            </li>
            <li className="mb-4 md:mx-0 sm:mx-20 mx-8">
              <p className="inline-block">コメント&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block leading-loose">
                本サイトに足を運んでいただき有難うございます。ワクワクな開発をモットーに面白そう！と思ったものを生み出し続けます。社内SEの影響より、IT開発者になる事を決意して日々学習してます。もしここ改善してほしい、こんな機能が欲しい等ありましたら意見お待ちしております。写真は実家の猫です。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Developer;
