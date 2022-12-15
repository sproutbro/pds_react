import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginState = createSlice({
  name : 'loginState',
  initialState: null,
  reducers: {
    loginAction(state, data) {
      return data.payload;
    }
  }
})

export let {loginAction} = loginState.actions;

export default configureStore({
  reducer: {
    loginState: loginState.reducer
  }
})