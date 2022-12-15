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

const myState = createSlice({
  name : 'myState',
  initialState: true,
  reducers: {
    myAction(state) {
      return !state
    }
  }
})
export let {myAction} = myState.actions;

export let {loginAction} = loginState.actions;

export default configureStore({
  reducer: {
    loginState: loginState.reducer,
    myState: myState.reducer
  }
})