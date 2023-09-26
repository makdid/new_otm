import { createSlice, createSelector } from "@reduxjs/toolkit";

const dataLocalStorage = localStorage.getItem("app") ? JSON.parse(localStorage.getItem("app")) : {};

const initialState = {
  themeMode: dataLocalStorage?.themeMode ? dataLocalStorage.themeMode : "light",
  sidebar: dataLocalStorage?.sidebar
    ? dataLocalStorage.sidebar
    : {
        isCollapsed: false,
        selected: "Dashboard",
      },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.themeMode = action.payload;

      localStorage.setItem("app", JSON.stringify(state));
    },
    setSidebarStatus: (state, action) => {
      state.sidebar = { ...state.sidebar, ...action.payload };

      localStorage.setItem("app", JSON.stringify(state));
    },
  },
});

export default appSlice;
