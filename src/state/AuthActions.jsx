//通知を送る
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginERROR = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
