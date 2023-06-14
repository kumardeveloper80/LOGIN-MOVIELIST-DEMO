import { createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const imagesSlice = createSlice({
  name: "images",
  initialState: {
    photodata: [],
  },
  reducers: {
    setImages(state, action) {
      state.photodata = action.payload;
    },
  },
});
export const { setImages } = imagesSlice.actions;
export default imagesSlice.reducer;
// Thunk
export function fetchImages() {
  return async function fetchImagesThunk(dispatch: any, getState: any) {
    // dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(
        "https://api.unsplash.com/photos/?client_id=70k60UjDeQcxIiZDswNPRfjnNksD-3gA90AQX-y_hSM"
      );
      const data = await res.json();
      dispatch(setImages(data));
      // dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      // dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
