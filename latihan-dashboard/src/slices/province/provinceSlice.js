import { createSlice } from "@reduxjs/toolkit";
import { getProvinces, getProvinceByCode } from "./provinceApiSlice";

const initialState = {
  provincesData: localStorage.getItem("province")
    ? JSON.parse(localStorage.getItem("province")).provincesData : [],
  provincesSearched: localStorage.getItem("province")
    ? JSON.parse(localStorage.getItem("province")).provincesSearched : [],
  loading: false,
  error: false,
  success: false,
  message: "",
};

export const provinceSlice = createSlice({
  name: "province",
  initialState,
  reducers: {
    resetProvince: (state) => {
      state.provincesSearched = [];
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvinces.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProvinces.fulfilled, (state, action) => {
      const { data } = action.payload;

      state.loading = false;
      state.provincesData = data.province.records;
      state.success = true;

      localStorage.setItem("province", JSON.stringify(state));
    });

    builder.addCase(getProvinces.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.proivincesData = [];

      localStorage.setItem("province", JSON.stringify(state));
    });

    builder.addCase(getProvinceByCode.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProvinceByCode.fulfilled, (state, action) => {
      state.loading = false;
      state.provincesSearched = action.payload;
      state.success = true;

      localStorage.setItem("province", JSON.stringify(state));
    });

    builder.addCase(getProvinceByCode.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.provincesSearched = [];

      localStorage.setItem("province", JSON.stringify(state));
    });
  },
});
