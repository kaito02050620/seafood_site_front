import React, { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

//userの初期状態
const initialUserState = {
  user: JSON.parse(localStorage.getItem("takenoko_seafood_user")) || null,
  isFetching: false,
  error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialUserState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialUserState);

  //ユーザーログイン完了したらローカルストレージにユーザー情報を保存する
  useEffect(() => {
    localStorage.setItem("takenoko_seafood_user", JSON.stringify(state.user));
  }, [state.user]);

  //1週間後にローカルストレージのユーザー情報を削除 ※ブラウザ起動時に1時間置きに監視
  const savedDay = new Date(localStorage.getItem("takenoko_seafood_user"));
  const storageDays = 7;
  function deleteExpiredData() {
    const currentDay = new Date();
    if (currentDay - savedDay > storageDays * 24 * 60 * 60 * 1000) {
      localStorage.removeItem("takenoko_seafood_user");
      localStorage.removeItem("savedDay");
    }
  }
  const interval = 60 * 60 * 1000;
  setInterval(deleteExpiredData, interval);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
