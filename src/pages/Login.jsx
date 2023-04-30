import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../state/dispatch";
import { AuthContext } from "../state/AuthContext";

function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  //ログインボタン、入力値チェック
  const loginButton = async (e) => {
    e.preventDefault();
    if (
      email.current.value !== "" &&
      password.current.value !== "" &&
      confirmPassword.current.value !== ""
    ) {
      if (password.current.value === confirmPassword.current.value) {
        try {
          loginCall(
            {
              email: email.current.value,
              password: password.current.value,
            },
            dispatch
          );
          alert("ログインに成功しました");
        } catch (error) {
          console.log(error);
        }
      } else {
        confirmPassword.current.setCustomValidity(
          "パスワードが一致していません"
        );
        password.current.value = "";
        confirmPassword.current.value = "";
      }
    } else {
      console.log("ログインできません");
    }
  };
  return (
    <div className="sectionBoard md:p-16 sm:p-8 p-4">
      <div className="max-w-sm bg-white bg-opacity-80 rounded-sm shadow-md p-6 m-auto ">
        <h1 className="text-2xl text-center mb-5">ログイン</h1>

        <form className="" onSubmit={(e) => loginButton(e)}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1">
              メールアドレス
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="email"
              name="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              placeholder="メールアドレス"
              ref={email}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1">
              パスワード
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="password"
              name="password"
              id="password"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmationPassword" className="block mb-1">
              確認用パスワード
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              minLength="6"
              placeholder="確認用パスワード"
              ref={confirmPassword}
              required
            />
          </div>
          <button
            type="submit"
            className="block bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border m-auto button button:hover"
          >
            ログインする
          </button>
        </form>
        <Link to="/register">
          <p className="text-blue-400 text-sm text-center mt-5 cursor-pointer button button:hover">
            新規登録がまだの方はこちらから
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
