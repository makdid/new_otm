import { createSlice } from "@reduxjs/toolkit";
import { getCities, getCityByCode } from "./cityApiSlice";

const initialState = {
  citiesData: localStorage.getItem("city") 
  ? JSON.parse(localStorage.getItem("city")).citiesData : [],
  citiesSearched: localStorage.getItem("city") 
  ? JSON.parse(localStorage.getItem("city")).citiesSearched : [],
  loading: false,
  error: false,
  success: false,
  message: "",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    resetCity: (state) => {
      state.citiesSearched = [];
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCities.fulfilled, (state, action) => {
      const { data } = action.payload;

      state.loading = false;
      state.citiesData = data.city.records;
      state.success = true;

      localStorage.setItem("city", JSON.stringify(state));
    });

    builder.addCase(getCities.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.citiesData = [];

      localStorage.setItem("city", JSON.stringify(state));
    });

    builder.addCase(getCityByCode.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCityByCode.fulfilled, (state, action) => {
      state.loading = false;
      state.citiesSearched = action.payload;
      state.success = true;

      localStorage.setItem("city", JSON.stringify(state));
    });

    builder.addCase(getCityByCode.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.citiesSearched = [];

      localStorage.setItem("city", JSON.stringify(state));
    });
  },
});
