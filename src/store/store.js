import { configureStore, createSlice } from "@reduxjs/toolkit";

const username = createSlice({
  name : 'username',
  initialState: '',
  reducers: {
    setUsername(state, action) {
      return action.payload
    }
  }
})

export const {setUsername} = username.actions;

export default configureStore({
  reducer: {
    username: username.reducer
  }
})