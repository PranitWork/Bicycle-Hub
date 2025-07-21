
import axios from "../../api/Config";



export const asyncBuyerInfoStore = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/buyer", data);
    dispatch(loadbuyer(response.data));
  } catch (err) {
    console.log("Registration error:", err);
  }
};