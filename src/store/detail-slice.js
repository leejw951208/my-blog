import { createSlice } from "@reduxjs/toolkit";
import CONTENT_DATAS from "../data";

const detailSlice = createSlice({
  name: "detail",
  initialState: { is: false, data: {} },
  reducers: {
    setDetail(state, action) {
      state.is = action.payload.is;
      state.data = CONTENT_DATAS.find(
        (content) => content.id === action.payload.id
      );
    },
  },
});

export const detailAction = detailSlice.actions;
export default detailSlice;
