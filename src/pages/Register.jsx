import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function Register() {
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const navigate = useNavigate();

  //新規登録ボタン、入力値チェック
  const newRegisterButton = async (e) => {
    e.preventDefault();
    if (
      userName.current.value !== "" &&
      email.current.value !== "" &&
      password.current.value !== "" &&
      confirmPassword.current.value !== ""
    ) {
      if (password.current.value === confirmPassword.current.value) {
        try {
          await axios.post(API_SERVER + "/auth/register", {
            username: userName.current.value,
            email: email.current.value,
            password: password.current.value,
          });
          navigate("/login");
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
      console.log("登録できません");
    }
  };

  return (
    <div className="sectionBoard md:p-16 sm:p-8 p-4">
      <div className="max-w-sm bg-white bg-opacity-80 rounded-sm shadow-md p-6 m-auto ">
        <h1 className="text-2xl text-center mb-5">新規登録</h1>
        <form className="" onSubmit={(e) => newRegisterButton(e)}>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-1">
              ユーザー名
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="text"
              name="username"
              id="username"
              placeholder="ユーザー名"
              required
              min="1"
              ref={userName}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1">
              メールアドレス
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="email"
              name="email"
              id="email"
              placeholder="メールアドレス"
              required
              ref={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
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
              ref={password}
              minLength="6"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-1">
              確認用パスワード
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="password"
              name="confirmPassword"
              id="confirmationPassword"
              placeholder="確認用パスワード"
              required
              ref={confirmPassword}
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="block bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border m-auto"
          >
            新規登録する
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
