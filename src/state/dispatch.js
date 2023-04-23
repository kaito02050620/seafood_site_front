import axios from "axios";
const API_SERVER = import.meta.env.VITE_API_SERVER;

export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(API_SERVER + "/auth/login", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error });
  }
};
