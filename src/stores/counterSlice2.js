import { createSlice } from "@reduxjs/toolkit";

const counter2Slice = createSlice({
  name: "counter2",
  initialState: {
    value: 0,
    kontolodon: 123,
  },
  //   reducer kaya action
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counter2Slice.actions;
export default counter2Slice.reducer;
