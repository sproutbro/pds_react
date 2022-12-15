import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginState = createSlice({
  name : 'loginState',
  initialState: "",
  reducers: {
    loginAction(state, data) {
      let token = localStorage.getItem("Authorization");

      const loginCheck1 = async (data) => {
        try {
          const response = await axios.post("/login", data)
          token = response.headers.authorization;
          localStorage.setItem("Authorization", token);
          axios.defaults.headers.common["Authorization"] = token;
        } catch(err) {
          token = "";
          axios.defaults.headers.common["Authorization"] = null;
          localStorage.removeItem("Authorization");
        }
      }

      const loginCheck2 = async (token) => {
        try {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.get("/user");
          token = response.headers.authorization;
          localStorage.setItem("Authorization", token);
          axios.defaults.headers.common["Authorization"] = token;
        } catch(err) {
          token = "";
          axios.defaults.headers.common["Authorization"] = null;
          localStorage.removeItem("Authorization");
        }
      }

      if(data.payload) {
        loginCheck1(data.payload)
      } else if (token) {
        loginCheck2(token);
      }
      
      return token;
    }
  }
})

export let {loginAction} = loginState.actions;

export default configureStore({
  reducer: {
    loginState: loginState.reducer
  }
})