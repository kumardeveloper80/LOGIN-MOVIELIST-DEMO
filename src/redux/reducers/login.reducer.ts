import { createSlice } from "@reduxjs/toolkit";
import authAction from "../actions/login.action";

const loginSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authAction.fulfilled, (state, { payload }) => {
      const movieArray = JSON.stringify(payload?.userdata?.movies? payload.userdata.movies:[])
      localStorage.setItem('movielist', movieArray);
      state.user = payload;
    });
  },
});

export default loginSlice;
