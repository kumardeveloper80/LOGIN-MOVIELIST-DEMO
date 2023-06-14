import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../api";
import { axiosErrHandle } from "../../api/axiosHandle";

export const signupService = async (body: any) => {
  return server.post(`api/v1/users/signup`, body);
};

const signupAction = createAsyncThunk(
  "user/signup",
  async (body: any, thunkAPI) => {
    try {
      const res = await signupService(body);
      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(axiosErrHandle(err));
    }
  }
);

export default signupAction;
