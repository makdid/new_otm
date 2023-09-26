import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: localStorage.getItem("wb") ? JSON.parse(localStorage.getItem("wb"))?.weight : -1,
  lastChange: localStorage.getItem("wb") ? JSON.parse(localStorage.getItem("wb"))?.lastChange : 0,
  isStable: localStorage.getItem("wb") ? JSON.parse(localStorage.getItem("wb"))?.isStable : false,
  onProcessing: localStorage.getItem("wb") ? JSON.parse(localStorage.getItem("wb"))?.onProcessing : false,
  canStartScalling: localStorage.getItem("wb") ? JSON.parse(localStorage.getItem("wb"))?.canStartScalling : false,
};

export const wbSlice = createSlice({
  name: "wb",
  initialState,
  reducers: {
    setWb: (state, action) => {
      // console.log(action.payload);
      state = { ...state, ...action.payload };

      localStorage.setItem("wb", JSON.stringify(state));

      return state;
    },
    clearWb: (state, action) => {
      state = {
        weight: -1,
        lastChange: 0,
        isStable: false,
        onProcessing: false,
        canStartScalling: false,
      };

      localStorage.setItem("wb", JSON.stringify(state));
    },
  },
});

// export default appSlice;
