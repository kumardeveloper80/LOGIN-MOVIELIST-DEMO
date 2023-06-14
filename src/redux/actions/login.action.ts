import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../api"
import { axiosErrHandle, axiosResHandle } from "../../api/axiosHandle"

export const loginService = async(body: any) => {

    return server.post(`api/v1/auth/login`, body);
};

const authAction = createAsyncThunk("user/auth", async (body:any, thunkAPI) => {
    try {
  
       if(!body) {
        return null;
       }
       else {
        const res = await loginService(body);
      
        localStorage.setItem('token', res?.data?.access_token)
        return axiosResHandle(res);
       }
        
    } catch (err) {
        return thunkAPI.rejectWithValue(axiosErrHandle(err));
    }
});

export default authAction;

