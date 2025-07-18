
import axios from "../../api/Config";
import { loadusers } from "../reducers/UserReducer";

// Load current user from localStorage
export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) {
      dispatch(loadusers(user));
    }
  } catch (err) {
    console.log("Error loading user:", err);
  }
};

// Register a new user
export const asyncRegisterUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/users", data);
    console.log("User registered:", response.data);
    localStorage.setItem("users", JSON.stringify(response.data));
    dispatch(asyncCurrentUser());
  } catch (err) {
    console.log("Registration error:", err);
  }
};

// Sign in existing user
export const asyncSigninUser = (credentials) => async (dispatch) => {

  try {
    const { data } = await axios.get(
      `/users?email=${credentials.email}&password=${credentials.password}`
    );

    if (data[0]) {
      console.log("User logged in!");
      localStorage.setItem("users", JSON.stringify(data[0]));
      dispatch(asyncCurrentUser());
      return true
    } else {
      alert("Wrong credentials!");
      return false
    }
  } catch (err) {
    console.log("Login error:", err);
  }
};
