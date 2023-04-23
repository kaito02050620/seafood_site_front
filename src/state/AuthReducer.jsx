export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        //ログイン前（user情報なし、DBからuser情報取得可能、エラーはなし）
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        //ログイン中（user情報あり、DBからuser情報取得済み、エラーはなし）
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_ERROR":
      return {
        //ログイン前（user情報なし、DBからuser情報取得（user登録なし、入力ミス）出来ない、エラーが出る）
        user: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      throw state;
  }
};
