import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginState = createSlice({
  name : 'login',
  initialState: false,
  reducers: {
    changeLogin(state) {
      return true;
    }
  }
})

export let {changeLogin} = loginState.actions;

export default configureStore({
  reducer: {
    loginState: loginState.reducer
  }
})